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
function deleteAwardInSpreadSheet(SPREADSHEET_ID, category, deleteRowIndex, isLastDataInYear){
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
function deletePublicationInPrivateSpreadSheet(SPREADSHEET_ID, category, deleteRowIndex, isLastDataInYear){
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



/**
 * 指定行に存在するAward情報をSheetから削除する
 * @param  {string} SPREADSHEET_ID    指定したSpread SheetのID
 * @param  {string} category          指定したカテゴリー
 * @param  {number} deleteRowIndex    削除したい行番号
 * @param  {boolean} isLastDataInYear 削除データがその年の唯一データであるかどうか
 * @return {void}
 */
function deletePublicationInPublicSpreadSheet(SPREADSHEET_ID, category, deleteRowIndex, isLastDataInYear){
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
 * public Spread Sheet内の削除したいデータに関する情報を集める
 *     カテゴリーはaward
 * @param  {string} SPREADSHEET_ID 指定したSpread SheetのID
 * @param  {string} category       削除したいデータのカテゴリー
 * @param  {number} year           削除したいデータの年
 * @param  {string} awardType      削除したいデータのtype of award
 * @param  {string} detail         削除したいデータのdetail
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

  var awardInformationInPublicSpreadSheet = {existData: false, deleteRowIndex: 0, isLastDataInYear: false};

  if(yearFirstRow === yearLastRow){
    awardInformationInPublicSpreadSheet.isLastDataInYear = true;
  }

  contentValues.forEach(function(element) {
    if(awardType === element[0] && detail === element[1]){
      awardInformationInPublicSpreadSheet.existData = true;
      awardInformationInPublicSpreadSheet.deleteRowIndex = row;
    }

    row = row + 1;
  });

  return awardInformationInPublicSpreadSheet;
}



/**
 * public Spread Sheet内の削除したいデータに関する情報を集める
 *     カテゴリーはaward以外
 * @param  {string} SPREADSHEET_ID 指定したSpread SheetのID
 * @param  {string} category       削除したいデータのカテゴリー
 * @param  {number} year           削除したいデータの年
 * @param  {string} detail         削除したいデータのdetail
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

  var awardInformationInPublicSpreadSheet = {existData: false, deleteRowIndex: 0, isLastDataInYear: false};

  if(yearFirstRow === yearLastRow){
    awardInformationInPublicSpreadSheet.isLastDataInYear = true;
  }

  contentValues.forEach(function(element) {
    Logger.log(element);
    if(detail === element[0]){
      awardInformationInPublicSpreadSheet.existData = true;
      awardInformationInPublicSpreadSheet.deleteRowIndex = row;
    }

    row = row + 1;
  });

  return awardInformationInPublicSpreadSheet;
}
