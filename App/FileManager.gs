/**
 * main_js.html内のhandleFormSubmit関数内の
 *     各カテゴリーに応じた処理を統一するために
 *     作成しただけの形式的な関数
 * @return {string} 形式的なので何を返してもOK
 */
function processFormAward() {
  return 'Success';
}



/**
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
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
 * html内で添付したファイルをGoogle Driveの
 *     PhD Thesisフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormPhDThesis(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PHD_THESIS_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * html内で添付したファイルをGoogle Driveの
 *     Master Thesisフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormMasterThesis(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_MASTER_THESIS_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}



/**
 * html内で添付したファイルをGoogle Driveの
 *     Bachelor Thesisフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} formObject 添付したファイルを含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function processFormBachelorThesis(formObject) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BACHELOR_THESIS_FOLDER_ID));
  var file = formObject.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();

  return file_url;
}
