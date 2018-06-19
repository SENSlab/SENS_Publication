// exec（公開版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbxZrSKdxNEmOZHbtHSFlWG8IZnLbkkkyrWfVXJAqj2XBTJD_dL7/exec
// dev（開発版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbz4OrU3N9-a2fM_Q-22TFNH5fEXWh208foY4nJabRRd/dev

var ENCRYPTED_JOURNAL_FOLDER_ID = 'U2FsdGVkX19aSy30sRTnZYGzZr+mIK5cUlOkm4FJ22E5NXWz56NcnhZSXW0P2ApaH0L7eqj2oVtHIV3eaeF3/g==';
var ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID = 'U2FsdGVkX1+Fs50I6tufQ8kpPboSpVsb62nef8WRD+MIW6j5sLkmFZvr4TaBroU+2lbHo9NqGjjNfZ+poE3U2A==s';
var ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID = 'U2FsdGVkX18caSNKh+SS5KzxxdkTUPAqICZTC8xxONWO3gIzrSHTe9i/X6cCDv+C2nRdPDubOs3+R6reTqx5aQ==';
var ENCRYPTED_SURVEY_FOLDER_ID = 'U2FsdGVkX19RZaP2rn7GKvVSMfhvcqe/3kRo1qbXjyf8ujbldAYBjxUPlSaERp7B1DQZMbGobBhj3WuQBXrS5Q==';
var ENCRYPTED_PRESS_FOLDER_ID = 'U2FsdGVkX19KDub0XK+lrX9JEn/FCm9y/+KzLJScxucdP4mbzYMprtGjyBs6dm4JEczdd/5Tb+eDDO8d9qsGWQ==';
var ENCRYPTED_BOOK_FOLDER_ID = 'U2FsdGVkX18P4qhTjfvPYeVI7Mj10FXhvPxD5Z4taGvH6ZirrEMk4uhBXB9CDvkcnfeaUaMcVtfzhTrvQfoylA==';
var ENCRYPTED_UNKNOWN_FOLDER_ID = 'U2FsdGVkX19iP/Fr+Bif81/QA9w0PTE2MNX34Qxvr8PRE4RQneaiAkT8GEmjz75mqqbvEKVcBG6rJEr9+4OU+Q==';

/**
 * HTTPのGETに対して応答する
 *     詳しくは公式ドキュメント参照
 *     https://developers.google.com/apps-script/guides/web
 * @return {HtmlOutput Object} 表示するhtmlオブジェクト
 */
function doGet() {
  var template = HtmlService.createTemplateFromFile('index.html');
  return template.evaluate().setTitle('sens');
}



/**
 * index.htmlから外部htmlを読み込む
 * @param  {string} filename includeしたいhtmlファイルのファイル名
 * @return {string}          指定したファイルからHtmlOutputオブジェクトを作成し，
 *     そのHtmlOutputオブジェクトのコンテンツを文字列として返す
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}



/**
 * 文字列の暗号化・復号化のためのクラス
 * @param       {string} pass 暗号化・復号化のためのパスワード
 * @constructor
 */
function Cipher (pass) {
  var self = this;
  var pass_ = pass;
  var algo_ = 'AES';

  if (!pass_) {
    throw 'you must provide a passphrase';
  }

  self.getAlgo = function () {
    return algo_;
  };
  /**
   * messageを暗号化する
   * @param {string} message 暗号化する文字列
   * @return {string} 暗号化された結果の文字列
   */
  self.encrypt = function  (message) {
    return CryptoJS[algo_].encrypt(message, pass_).toString();
  };

  /**
   * messageを復号化する
   * @param {string} message 復号化する文字列
   * @return {string} 復号化された結果の文字列
   */
  self.decrypt = function  (encryptedMessage) {
    return CryptoJS[algo_].decrypt(encryptedMessage, pass_).toString(CryptoJS.enc.Utf8);
  };

  return self;
}



/**
 * 指定されたカテゴリーのsheetに存在する年を探す
 * @param {string} SPREADSHEET_ID 検索先のSpread SheetのID
 * @param {string} category 検索対象のカテゴリー
 * @return {Array} 検索された年の配列
 */
function searchYear(SPREADSHEET_ID, category){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  var sheet = getSheetByCategory(spreadSheet, category);

  var range = sheet.getRange(1, 1, sheet.getLastRow());
  var values = range.getValues();

  var i = 1;
  var yearArray = [];

  while(1){
    if(values[i] === undefined){
      break;
    }

    if(values[i][0] !== ''){
      yearArray.push(values[i][0]);
    }

    i = i + 1;
  }

  return yearArray;
}



/**
 * 指定されたカテゴリーと年に該当する内容を探す
 * @param  {string} SPREADSHEET_ID  検索対象のSpread SheetのID
 * @param  {string} category        検索対象のカテゴリー
 * @param  {string} year            検索対象の年
 * @return {Array.<Array.<string>>} SpreadSheetから取得した，検索結果であるセル内の値を
 *     2次元配列データとして格納したもの（第一要素: 行 第二要素: 列）
 */
function searchByCategoryAndYear(SPREADSHEET_ID, category, year){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  var sheet = getSheetByCategory(spreadSheet, category);

  var yearRange = sheet.getRange(1, 1, sheet.getLastRow());
  var yearValues = yearRange.getValues();

  var i = 1;
  var yearFirstRow;
  var yearLastRow;
  var isYear = false;

  while(1){
    // If the year is in the spreadsheet.
    if(Number(yearValues[i][0]) == Number(year)){
      isYear = true;
      yearFirstRow = i + 2;
    }

    if(isYear && isEndOfYear(yearValues, year, i)){
      yearLastRow = i + 1;
      break;
    }

    i = i + 1;
  }

  var contentRange = sheet.getRange(yearFirstRow, 2, yearLastRow - yearFirstRow + 1, 2);
  var headValues = sheet.getRange(1, 2, 1, 2).getValues();

  var row = yearFirstRow;

  var contentValues = contentRange.getValues();

  contentValues.forEach(function(element) {
      element.push(String(row))
      row = row + 1;
    });


  var allValues = headValues.concat(contentValues);

  return allValues;
}



/**
 * 指定されたカテゴリーに対応するsheetを取得する
 * @param  {Spreadsheet} spreadSheet 指定したSpread Sheet
 * @param  {string} category    指定したカテゴリー
 * @return {Sheet}             取得したSheet
 */
function getSheetByCategory(spreadSheet, category){
  switch(category){
    case 'award':
      return spreadSheet.getSheetByName('Award');
    case 'journal':
      return spreadSheet.getSheetByName('Journal');
    case 'international_conference':
      return spreadSheet.getSheetByName('International Conference');
    case 'domestic_conference':
      return spreadSheet.getSheetByName('Domestic Conference');
    case 'survey':
      return spreadSheet.getSheetByName('Survey');
    case 'press':
      return spreadSheet.getSheetByName('Press');
    case 'book':
      return spreadSheet.getSheetByName('Book');
    case 'unknown':
      return spreadSheet.getSheetByName('Unknown');
  }
}



/**
 * 指定されたカテゴリーに対応するフォルダのIDを取得する
 * @param  {string} category 指定したカテゴリー
 * @return {Folder}          取得したFolder
 */
function getFolderIdByCategory(category){
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');

  switch(category){
    case 'journal':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_JOURNAL_FOLDER_ID));
    case 'international_conference':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID));
    case 'domestic_conference':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID));
    case 'survey':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_SURVEY_FOLDER_ID));
    case 'press':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PRESS_FOLDER_ID));
    case 'book':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BOOK_FOLDER_ID));
    case 'unknown':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_UNKNOWN_FOLDER_ID));
  }
}



/**
 * 指定行に存在するAward情報をSheetから削除する
 * @param  {string} SPREADSHEET_ID 指定したSpread SheetのID
 * @param  {string} category       指定したカテゴリー
 * @param  {number} editRowIndex   編集したい行番号
 * @return {void}
 */
function editAward(SPREADSHEET_ID, category, editRowIndex, editElement, editedContent){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  if(editElement === 'award'){
    sheet.getRange(editRowIndex, 2).setValue(editedContent);
  }
  else if(editElement === 'detail'){
    sheet.getRange(editRowIndex, 3).setValue(editedContent);
  }

}

function editPublication(SPREADSHEET_ID, category, editRowIndex, editedContent){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  sheet.getRange(editRowIndex, 2).setValue(editedContent);
}



function editPublicationFile(SPREADSHEET_ID, category, url, editRowIndex, editedFileName){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  var range = sheet.getRange(editRowIndex, 3);
  var preUrl = /"(.*?)"/.exec(range.getFormulaR1C1())[1];

  var IdParsedFromUrl = preUrl.replace(/https:\/\/.*\/file\/d\//, '');
  IdParsedFromUrl = IdParsedFromUrl.replace(/\/view.*/, '');

  var folder = getFolderIdByCategory(category);
  var file = DriveApp.getFileById(IdParsedFromUrl);

  file.setTrashed(true);

  var text = editedFileName;
  var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
  sheet.getRange(editRowIndex, 3).setFormula(hyperlink);
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Journalフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormJournal(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_JOURNAL_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     International Conferenceフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormInternationalConference(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Domestic Conferenceフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormDomesticConference(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Surveyフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormSurvey(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_SURVEY_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Pressフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormPress(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PRESS_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Bookフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormBook(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BOOK_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * index.html内で添付したファイルをGoogle Driveの
 *     Unknownフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormUnknown(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_UNKNOWN_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * Spread Sheet内において，現在の行が出力したい年の
 *     最終行かどうかを判定する
 * @param  {Array.<Array.<string>>} values SpreadSheetから取得した，ある範囲内のセル内の値を
 *     2次元配列データとして格納したもの
 * @param  {string}  year   index.html内で選択された年
 * @param  {number}  i      Spread Sheetにおける行インデックス
 * @return {boolean}        true: i行目が最終行  false: i行目が最終行ではない
 */
function isEndOfYear(values, year, i){
  if(values[i+1] === undefined || values[i+1][0] !== ''){
    return true;
  }
  return false;
}
