/**
 * Award情報をPrivateなSpread Sheetに出力する
 * @param {string} SPREADSHEET_ID 出力先のSpread SheetのID
 * @param {string} year           受賞年
 * @param {string} award          賞
 * @param {string} detail         受賞内容
 */
function setAwardInPrivateSpreadSheet(SPREADSHEET_ID, year, award, detail){
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
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 2).setValues([[award, detail]]);
  }

}



/**
 * Award情報をホームページ用Spread Sheetに出力する
 * @param {string} SPREADSHEET_ID 出力先のSpread SheetのID
 * @param {string} year           受賞年
 * @param {string} award          賞
 * @param {string} detail         受賞内容
 */
function setAwardInPublicSpreadSheet(SPREADSHEET_ID, year, award, detail){
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
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 2).setValues([[award, detail]]);
  }

}



/**
 * Award以外の，あるカテゴリーの情報をPrivateなSpread Sheetに出力する
 * @param {string} SPREADSHEET_ID 出力先のSpread SheetのID
 * @param {string} year           イベントのあった年
 * @param {string} detail         詳細
 * @param {string} url            添付ファイルの保存先url
 * @param {string} category       イベントのカテゴリー（Award以外）
 * @param {string} fileName       ファイル名
 */
function setPublicationWithFileInPrivateSpreadSheet(SPREADSHEET_ID, year, detail, url, category, fileName){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

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

    var text = fileName;
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 2, 3, 1, 1).setFormula(hyperlink);
  }
  else if(isOldYear){
    sheet.insertRows(i + 2, 2);
    sheet.getRange(i + 2, 1, 2, 2).setValues([[year, ''],['', detail]]);
    var text = fileName;
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 3, 3, 1, 1).setFormula(hyperlink);
  }
  else if(!isNewYear && !isOldYear){
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 1).setValues([[detail]]);
    var text = fileName;
    var hyperlink = '=Hyperlink("' + url + text + '","' + text + '")';
    sheet.getRange(i + 2, 3, 1, 1).setFormula(hyperlink);
  }

}



/**
 * Award以外の，あるカテゴリーの情報をホームページ用Spread Sheetに出力する
 * @param {string} SPREADSHEET_ID 出力先のSpread SheetのID
 * @param {string} year           イベントのあった年
 * @param {string} detail         詳細
 * @param {string} category       イベントのカテゴリー（Award以外）
 */
function setPublicationWithFileInPublicSpreadSheet(SPREADSHEET_ID, year, detail, category){
  var spreadSheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetByCategory(spreadSheet, category);

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
  }
  else if(isOldYear){
    sheet.insertRows(i + 2, 2);
    sheet.getRange(i + 2, 1, 2, 2).setValues([[year, ''],['', detail]]);
  }
  else if(!isNewYear && !isOldYear){
    sheet.insertRowAfter(i + 1);
    sheet.getRange(i + 2, 2, 1, 1).setValues([[detail]]);
  }

}
