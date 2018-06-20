/**
 * 指定されたカテゴリーと年に該当する内容を探す
 * @param  {string} SPREADSHEET_ID  検索対象のSpread SheetのID
 * @param  {string} category        検索対象のカテゴリー
 * @param  {string} year            検索対象の年
 * @return {Array.<Array.<string>>} SpreadSheetから取得した，検索結果であるセル内の値を
 *     2次元配列データとして格納したもの（第一要素: 行 第二要素: 列）
 */
function searchDeleteDataByCategoryAndYear(SPREADSHEET_ID, category, year){
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
 * 指定行に存在するAward情報をSheetから削除する
 * @param  {string} SPREADSHEET_ID    指定したSpread SheetのID
 * @param  {string} category          指定したカテゴリー
 * @param  {number} deleteRowIndex    削除したい行番号
 * @param  {boolean} isLastDataInYear 削除データがその年の唯一データであるかどうか
 * @return {void}
 */
function deleteAward(SPREADSHEET_ID, category, deleteRowIndex, isLastDataInYear){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

  if(isLastDataInYear){
    sheet.deleteRows(deleteRowIndex - 1, 2);
  }
  else if(!isLastDataInYear){
    sheet.deleteRow(deleteRowIndex);
  }
}



/**
 * Award以外のカテゴリーの情報を以下の2点のように削除する
 *     ・指定行に存在するリンク先のファイルをGoogle Driveから削除する
 *     ・指定行に存在する情報をSheetから削除する
 * @param  {string} SPREADSHEET_ID    指定したSpread SheetのID
 * @param  {string} category          指定したカテゴリー
 * @param  {number} deleteRowIndex    削除したい行番号
 * @param  {boolean} isLastDataInYear 削除データがその年の唯一データであるかどうか
 * @return {void}
 */
function deletePublication(SPREADSHEET_ID, category, deleteRowIndex, isLastDataInYear){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);
  var range = sheet.getRange(deleteRowIndex, 3);
  var url = /"(.*?)"/.exec(range.getFormulaR1C1())[1];

  var IdParsedFromUrl = url.replace(/https:\/\/.*\/file\/d\//, '');
  IdParsedFromUrl = IdParsedFromUrl.replace(/\/view.*/, '');

  var folder = getFolderIdByCategory(category);
  var file = DriveApp.getFileById(IdParsedFromUrl);
  file.setTrashed(true);

  if(isLastDataInYear){
    sheet.deleteRows(deleteRowIndex - 1, 2);
  }
  else if(!isLastDataInYear){
    sheet.deleteRow(deleteRowIndex);
  }
}
