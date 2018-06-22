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
 * Spread Sheet内において，現在の行が出力したい年の
 *     最終行かどうかを判定する
 * @param  {Array.<Array.<string>>}  values SpreadSheetから取得した，ある範囲内のセル内の値を
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



/**
 * public Spread Sheet内の削除・編集したいデータに関する情報を集める
 *     カテゴリーはaward
 * @param  {string} SPREADSHEET_ID 指定したSpread SheetのID
 * @param  {string} category       削除・編集したいデータのカテゴリー
 * @param  {number} year           削除・編集したいデータの年
 * @param  {string} awardType      削除・編集したいデータのtype of award
 * @param  {string} detail         削除・編集したいデータのdetail
 * @return {Object}
 */
function ReferAwardDataInPublicSpreadSheet(SPREADSHEET_ID, category, year, awardType, detail){
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

  var contentValues = contentRange.getValues();

  var row = yearFirstRow;

  var awardInformationInPublicSpreadSheet = {existData: false, deleteRowIndex: 0, editRowIndex: 0, isLastDataInYear: false};

  if(yearFirstRow === yearLastRow){
    awardInformationInPublicSpreadSheet.isLastDataInYear = true;
  }

  contentValues.forEach(function(element) {
    if(awardType === element[0] && detail === element[1]){
      awardInformationInPublicSpreadSheet.existData = true;
      awardInformationInPublicSpreadSheet.deleteRowIndex = row;
      awardInformationInPublicSpreadSheet.editRowIndex = row;
    }

    row = row + 1;
  });

  return awardInformationInPublicSpreadSheet;
}



/**
 * public Spread Sheet内の削除・編集したいデータに関する情報を集める
 *     カテゴリーはaward以外
 * @param  {string} SPREADSHEET_ID 指定したSpread SheetのID
 * @param  {string} category       削除・編集したいデータのカテゴリー
 * @param  {number} year           削除・編集したいデータの年
 * @param  {string} detail         削除・編集したいデータのdetail
 * @return {void}
 */
function ReferPublicationDataInPublicSpreadSheet(SPREADSHEET_ID, category, year, detail){
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

  var contentRange = sheet.getRange(yearFirstRow, 2, yearLastRow - yearFirstRow + 1, 1);

  var contentValues = contentRange.getValues();

  var row = yearFirstRow;

  var awardInformationInPublicSpreadSheet = {existData: false, deleteRowIndex: 0, editRowIndex: 0, isLastDataInYear: false};

  if(yearFirstRow === yearLastRow){
    awardInformationInPublicSpreadSheet.isLastDataInYear = true;
  }

  contentValues.forEach(function(element) {
    Logger.log(element);
    if(detail === element[0]){
      awardInformationInPublicSpreadSheet.existData = true;
      awardInformationInPublicSpreadSheet.deleteRowIndex = row;
      awardInformationInPublicSpreadSheet.editRowIndex = row;
    }

    row = row + 1;
  });

  return awardInformationInPublicSpreadSheet;
}
