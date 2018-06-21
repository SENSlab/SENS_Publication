var ENCRYPTED_JOURNAL_FOLDER_ID = 'U2FsdGVkX19aSy30sRTnZYGzZr+mIK5cUlOkm4FJ22E5NXWz56NcnhZSXW0P2ApaH0L7eqj2oVtHIV3eaeF3/g==';
var ENCRYPTED_INTERNATIONAL_CONFERENCE_FOLDER_ID = 'U2FsdGVkX1+Fs50I6tufQ8kpPboSpVsb62nef8WRD+MIW6j5sLkmFZvr4TaBroU+2lbHo9NqGjjNfZ+poE3U2A==s';
var ENCRYPTED_DOMESTIC_CONFERENCE_FOLDER_ID = 'U2FsdGVkX18caSNKh+SS5KzxxdkTUPAqICZTC8xxONWO3gIzrSHTe9i/X6cCDv+C2nRdPDubOs3+R6reTqx5aQ==';
var ENCRYPTED_SURVEY_FOLDER_ID = 'U2FsdGVkX19RZaP2rn7GKvVSMfhvcqe/3kRo1qbXjyf8ujbldAYBjxUPlSaERp7B1DQZMbGobBhj3WuQBXrS5Q==';
var ENCRYPTED_PRESS_FOLDER_ID = 'U2FsdGVkX19KDub0XK+lrX9JEn/FCm9y/+KzLJScxucdP4mbzYMprtGjyBs6dm4JEczdd/5Tb+eDDO8d9qsGWQ==';
var ENCRYPTED_BOOK_FOLDER_ID = 'U2FsdGVkX18P4qhTjfvPYeVI7Mj10FXhvPxD5Z4taGvH6ZirrEMk4uhBXB9CDvkcnfeaUaMcVtfzhTrvQfoylA==';
var ENCRYPTED_UNKNOWN_FOLDER_ID = 'U2FsdGVkX19iP/Fr+Bif81/QA9w0PTE2MNX34Qxvr8PRE4RQneaiAkT8GEmjz75mqqbvEKVcBG6rJEr9+4OU+Q==';



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
