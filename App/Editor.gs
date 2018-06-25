/**
 * 指定されたカテゴリーと年に該当する内容を探す
 * @param  {string} SPREADSHEET_ID  検索対象のSpread SheetのID
 * @param  {string} category        検索対象のカテゴリー
 * @param  {string} year            検索対象の年
 * @return {Array.<Array.<string>>} SpreadSheetから取得した，検索結果であるセル内の値を
 *     2次元配列データとして格納したもの（第一要素: 行 第二要素: 列）
 */
function searchEditDataByCategoryAndYear(SPREADSHEET_ID, category, year){
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
 * Spread Sheet (public/private)の指定行に存在する指定表頭の情報を編集する（Award用）
 * @param  {string} SPREADSHEET_ID 編集したいSpread SheetのID
 * @param  {string} category       編集したいカテゴリー
 * @param  {number} editRowIndex   編集したい行番号
 * @param  {string} editElement    編集したい表頭（'award' or 'detail'）
 * @param  {string} editedContent  編集後の内容
 * @return {void}
 */
function editAwardInSpreadSheet(SPREADSHEET_ID, category, editRowIndex, editElement, editedContent){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  if(editElement === 'award'){
    sheet.getRange(editRowIndex, 2).setValue(editedContent);
  }
  else if(editElement === 'detail'){
    sheet.getRange(editRowIndex, 3).setValue(editedContent);
  }

}



/**
 * Spread Sheet (public/private)の指定行に存在するdetail情報を編集する(Award以外のカテゴリー用)
 * @param  {string} SPREADSHEET_ID 編集したいSpread SheetのID
 * @param  {string} category       編集したいカテゴリー
 * @param  {number} editRowIndex   編集したい行番号
 * @param  {string} editedContent  編集後の内容
 * @return {void}
 */
function editPublicationInSpreadSheet(SPREADSHEET_ID, category, editRowIndex, editedContent){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  sheet.getRange(editRowIndex, 2).setValue(editedContent);
}



/**
 * Spread Sheet (private)の指定行に存在するfile情報を編集する(Award以外のカテゴリー用)
 * @param  {string} SPREADSHEET_ID 編集したいSpread SheetのID
 * @param  {string} category       編集したいカテゴリー
 * @param  {string} url            編集前のfileのurl
 * @param  {number} editRowIndex   編集したい行番号
 * @param  {string} editedFileName 編集後のfileの名前
 * @return {void}
 */
function editPublicationFileInPrivateSpreadSheet(SPREADSHEET_ID, category, url, editRowIndex, editedFileName){
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
