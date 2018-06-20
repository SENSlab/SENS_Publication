/**
 * 指定されたカテゴリーに対応するフォルダのIDを取得する
 * @param  {string} category 指定したカテゴリー
 * @return {Folder}          取得したFolder
 */
function getFolderIdByCategory(category){
  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');

  switch(category){
    case 'journal':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_JOURNAL_FOLDER_ID));
    case 'international_conference':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID));
    case 'domestic_conference':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID));
    case 'survey':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_SURVEY_FOLDER_ID));
    case 'press':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_PRESS_FOLDER_ID));
    case 'book':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_BOOK_FOLDER_ID));
    case 'unknown':
      return DriveApp.getFolderById(cipherInstance.decrypt(ENCRYPTED_UNKNOWN_FOLDER_ID));
  }
}
