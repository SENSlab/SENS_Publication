// exec（公開版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec
// dev（開発版）
//  https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwm5QXOywlJLLPlvTf5VNF-t3E88CnhYOD1ddNMHi8/dev



/**
 * HTTPのGETに対して応答する
 *     パラメータpで指定したregister/remover/editorのページに遷移する
 *     詳しくは公式ドキュメント参照
 *     https://developers.google.com/apps-script/guides/web
 * @param {Event Objects} リクエストパラメータに関する情報
 * @return {HtmlOutput Object} 表示するhtmlオブジェクト
 */
function doGet(e){
  var page=e.parameter["p"];

  if(page == "register" || page==null){
    return HtmlService.createTemplateFromFile('register.html').evaluate().setTitle('sens publication register').setFaviconUrl('https://drive.google.com/uc?id=1ICDCQA-yZ3olcj7ToDDZslgA18dmB3Zb&.ico');
  }
  else if(page =="remover"){
    return HtmlService.createTemplateFromFile('remover.html').evaluate().setTitle('sens publication remover').setFaviconUrl('https://drive.google.com/uc?id=1ICDCQA-yZ3olcj7ToDDZslgA18dmB3Zb&.ico');
  }
  else if(page =="editor"){
    return HtmlService.createTemplateFromFile('editor.html').evaluate().setTitle('sens publication editor').setFaviconUrl('https://drive.google.com/uc?id=1ICDCQA-yZ3olcj7ToDDZslgA18dmB3Zb&.ico');
  }

}



/**
 * *.htmlから他のhtmlを読み込む
 * @param  {string} filename includeしたいhtmlファイルのファイル名
 * @return {string}          指定したファイルからHtmlOutputオブジェクトを作成し，
 *     そのHtmlOutputオブジェクトのコンテンツを文字列として返す
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
