/**
 * 文字列の暗号化・復号化のためのクラス
 * @param       {string} pass 暗号化・復号化のためのパスワード
 * @constructor
 */
function Cipher (pass) {
  var self = this;
  var pass_ = pass;
  var algo_ = 'AES';

  if (!pass_) {
    throw 'you must provide a passphrase';
  }

  self.getAlgo = function () {
    return algo_;
  };
  /**
   * messageを暗号化する
   * @param {string} message 暗号化する文字列
   * @return {string} 暗号化された結果の文字列
   */
  self.encrypt = function  (message) {
    return CryptoJS[algo_].encrypt(message, pass_).toString();
  };

  /**
   * messageを復号化する
   * @param {string} message 復号化する文字列
   * @return {string} 復号化された結果の文字列
   */
  self.decrypt = function  (encryptedMessage) {
    return CryptoJS[algo_].decrypt(encryptedMessage, pass_).toString(CryptoJS.enc.Utf8);
  };

  return self;
}
