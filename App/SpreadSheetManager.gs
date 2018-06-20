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
