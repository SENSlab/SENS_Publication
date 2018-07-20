/**
 * html内で添付したファイルをGoogle Driveの
 *     該当するカテゴリフォルダに保存し，保存したファイルの
 *     urlを返す
 * @param  {form Object} fileDataWithCategoryAndYear 添付したファイル，カテゴリ，年を含む，formオブジェクト
 * @return {string}            保存したファイルのURLを返す
 *     ファイルが存在しない場合はnullを返す
 */
function addFileInDrive(fileDataWithCategoryAndYear) {
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');
  var folder;
  
  switch(fileDataWithCategoryAndYear.category){
    case 'journal':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_JOURNAL_FOLDER_ID));
      break;
    case 'international_conference':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID));
      break;
    case 'domestic_conference':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID));
      break;
    case 'survey':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_SURVEY_FOLDER_ID));
      break;
    case 'press':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PRESS_FOLDER_ID));
      break;
    case 'book':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BOOK_FOLDER_ID));
      break;
    case 'unknown':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_UNKNOWN_FOLDER_ID));
      break;
    case 'phd_thesis':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PHD_THESIS_FOLDER_ID));
      break;
    case 'master_thesis':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_MASTER_THESIS_FOLDER_ID));
      break;
    case 'bachelor_thesis':
      folder = DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BACHELOR_THESIS_FOLDER_ID));
      break;
  }
  
  var file = fileDataWithCategoryAndYear.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();
  
  return file_url;
}