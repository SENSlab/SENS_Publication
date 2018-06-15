Since 2018 © SENS Laboratory (Osaka University) [redesign by moji and naruki]. All Rights Reserved.// exec（公開版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbx83bRrCsXBxZspYmc8H4hlQb4uXStNlL8RuuSmR_0yZKsPh9Ak/exec
// dev（開発版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbxu4V8cwYDQLCEUBU28eTvsra5ecYl8qIBwd4lhNlHT/dev

var ENCRYPTED_JOURNAL_FOLDER_ID = 'U2FsdGVkX19aSy30sRTnZYGzZr+mIK5cUlOkm4FJ22E5NXWz56NcnhZSXW0P2ApaH0L7eqj2oVtHIV3eaeF3/g==';
var ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID = 'U2FsdGVkX1+Fs50I6tufQ8kpPboSpVsb62nef8WRD+MIW6j5sLkmFZvr4TaBroU+2lbHo9NqGjjNfZ+poE3U2A==s';
var ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID = 'U2FsdGVkX18caSNKh+SS5KzxxdkTUPAqICZTC8xxONWO3gIzrSHTe9i/X6cCDv+C2nRdPDubOs3+R6reTqx5aQ==';
var ENCRYPTED_SURVEY_FOLDER_ID = 'U2FsdGVkX19RZaP2rn7GKvVSMfhvcqe/3kRo1qbXjyf8ujbldAYBjxUPlSaERp7B1DQZMbGobBhj3WuQBXrS5Q==';
var ENCRYPTED_PRESS_FOLDER_ID = 'U2FsdGVkX19KDub0XK+lrX9JEn/FCm9y/+KzLJScxucdP4mbzYMprtGjyBs6dm4JEczdd/5Tb+eDDO8d9qsGWQ==';
var ENCRYPTED_BOOK_FOLDER_ID = 'U2FsdGVkX18P4qhTjfvPYeVI7Mj10FXhvPxD5Z4taGvH6ZirrEMk4uhBXB9CDvkcnfeaUaMcVtfzhTrvQfoylA==';
var ENCRYPTED_UNKNOWN_FOLDER_ID = 'U2FsdGVkX19iP/Fr+Bif81/QA9w0PTE2MNX34Qxvr8PRE4RQneaiAkT8GEmjz75mqqbvEKVcBG6rJEr9+4OU+Q==';

function doGet() {
  var template = HtmlService.createTemplateFromFile('index.html');
  return template.evaluate().setTitle('sens');
}


function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function processFormAward() {
  return 'Success';
}


function Cipher (pass) {

  var self = this;
  // we'll allow case errors for algos.
  var pass_ = pass;
  var algo_ = 'AES';

  if (!algo_) {
    throw 'unknown crypto algo ' + optAlgo;
  }

  if (!pass_) {
    throw 'you must provide a passphrase';
  }

  self.getAlgo = function () {
    return algo_;
  };
  /**
   * encrypt a message
   * @param {string} message the message to be encrypted
   * @return {string} the encrypted message
   */
  self.encrypt = function  (message) {
    return CryptoJS[algo_].encrypt(message, pass_).toString();
  };

  /**
   * decrypt a message
   * @param {string} message the encrypted message to be decrypted
   * @return {string} the decrypted message
   */
  self.decrypt = function  (encryptedMessage) {
    return CryptoJS[algo_].decrypt(encryptedMessage, pass_).toString(CryptoJS.enc.Utf8);
  };

  return self;
}

function processFormJournal(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_JOURNAL_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormInternationalConference(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormDomesticConference(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormSurvey(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_SURVEY_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormPress(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PRESS_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormBook(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BOOK_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function processFormUnknown(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_UNKNOWN_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}

function setAwardInSpreadSheet(SPREADSHEET_ID, year, award, detail){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadSheet.getSheetByName('Award');
  var range = sheet.getRange(1, 1, sheet.getLastRow());
  var values = range.getValues();

  var i = 1;
  var isYear = false;
  var isNewYear = false;
  var isOldYear = false;
  var maybeOldYear = false;

  while(1){
    // If the year is new year and not in the spreadsheet.
    if(values[i][0] !== '' && Number(values[i][0]) < Number(year)){
      isNewYear = true;
      isYear = false;
      isOldYear = true;
      break;
    }

    // If the year is in the spreadsheet.
    if(Number(values[i][0]) == Number(year)){
      isYear = true;
      isOldYear = false;
      isNewYear = false;
    }

    if(isYear && isEndOfYear(values, year, i)){
      break;
    }

    // If the year is old year and not in the spreadsheet.
    if(values[i][0] !== '' && Number(values[i][0]) > Number(year)){
      maybeOldYear = true;
    }

    if(maybeOldYear && !isYear && values[i+1] === undefined){
      isOldYear = true;
      isYear = false;
      isNewYear = false;
      break;
    }

    i = i + 1;
  }


  if(isNewYear){
    sheet.insertRows(i + 1, 2);
    sheet.getRange(i + 1, 1, 2, 3).setValues([[year, '', ''],['', award, detail]]);
  }
  else if(isOldYear){
    sheet.insertRows(i + 2, 2);
    sheet.getRange(i + 2, 1, 2, 3).setValues([[year, '', ''],['', award, detail]]);
  }
  else if(!isNewYear && !isOldYear){
    Logger.log('hoge');
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 2).setValues([[award, detail]]);
  }

}



function isEndOfYear(values, year, i){
  if(values[i+1] === undefined || values[i+1][0] !== ''){
    return true;
  }
  return false;
}

function setPublicationWithFileInSpreadSheet(SPREADSHEET_ID, year, detail, url, category){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = '';
  switch(category){
    case 'journal':
      sheet = spreadSheet.getSheetByName('Journal');
      break;
    case 'international_conference':
      sheet = spreadSheet.getSheetByName('International Conference');
      break;
    case 'domestic_conference':
      sheet = spreadSheet.getSheetByName('Domestic Conference');
      break;
    case 'survey':
      sheet = spreadSheet.getSheetByName('Survey');
      break;
    case 'press':
      sheet = spreadSheet.getSheetByName('Press');
      break;
    case 'book':
      sheet = spreadSheet.getSheetByName('Book');
      break;
    case 'unknown':
      sheet = spreadSheet.getSheetByName('Unknown');
      break;
  }

  var range = sheet.getRange(1, 1, sheet.getLastRow());
  var values = range.getValues();

  var i = 1;
  var isYear = false;
  var isNewYear = false;
  var isOldYear = false;
  var maybeOldYear = false;

  while(1){
    // If the year is new year and not in the spreadsheet.
    if(values[i][0] !== '' && Number(values[i][0]) < Number(year)){
      isNewYear = true;
      isYear = false;
      isOldYear = true;
      break;
    }

    // If the year is in the spreadsheet.
    if(Number(values[i][0]) == Number(year)){
      isYear = true;
      isOldYear = false;
      isNewYear = false;
    }

    if(isYear && isEndOfYear(values, year, i)){
      break;
    }

    // If the year is old year and not in the spreadsheet.
    if(values[i][0] !== '' && Number(values[i][0]) > Number(year)){
      maybeOldYear = true;
    }

    if(maybeOldYear && !isYear && values[i+1] === undefined){
      isOldYear = true;
      isYear = false;
      isNewYear = false;
      break;
    }

    i = i + 1;
  }

  if(isNewYear){
    sheet.insertRows(i + 1, 2);
    sheet.getRange(i + 1, 1, 2, 2).setValues([[year, ''],['', detail]]);

    var text = "View";
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 2, 3, 1, 1).setFormula(hyperlink);
  }
  else if(isOldYear){
    sheet.insertRows(i + 2, 2);
    sheet.getRange(i + 2, 1, 2, 2).setValues([[year, ''],['', detail]]);
    var text = "View";
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 3, 3, 1, 1).setFormula(hyperlink);
  }
  else if(!isNewYear && !isOldYear){
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 1).setValues([[detail]]);
    var text = "View";
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 2, 3, 1, 1).setFormula(hyperlink);
  }

}
