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

  cipherInstance = new Cipher('S!kL#g&oN@mT6PtB%');

  var categoryFolder = getFolderIdByCategory(fileDataWithCategoryAndYear.category);
  var yearFolders = categoryFolder.getFolders();

  while (yearFolders.hasNext()) {
    var folderItr = yearFolders.next();
    if(folderItr.getName() === fileDataWithCategoryAndYear.year){
      folder = folderItr;
      break;
    }
  }

  if(folder === undefined){
    var folderId = categoryFolder.createFolder(fileDataWithCategoryAndYear.year).getId();
    folder = DriveApp.getFolderById(folderId);
  }
  
  var file = fileDataWithCategoryAndYear.attached_file;
  var drive_file = folder.createFile(file);
  var file_url = drive_file.getUrl();
  
  return file_url;
}