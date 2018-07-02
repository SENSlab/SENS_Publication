# Sens Publication (Will be released in September)
There are three functions.
1. Register publication data
2. Delete publication data
3. Edit publication data

# Sens Publication Register
You can register publication data from the link below.  
[sens publicaion register](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=register)  

**You need sens account.**

# Sens Publication Remover
You can delete publication data from the link below.  
[sens publicaion remover](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=remover)  

**You need sens account.**

# Sens Publication Editor
You can edit publication data from the link below.  
[sens publicaion editor](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=editor)  

**You need sens account.**

# Directory Structure
```
App/             # サーバーサイドの処理 / Server side processing
  |- Main.gs
  |- Cipher.gs
  |- DriveManager.gs
  |- FileManager.gs
  |- SpreadSheetManager.gs
  |- Register.gs
  |- Remover.gs
  |- Editor.gs
Public/          # クライアントサイドの処理 / Client side processing
  |- css/
    |- myCustomRegister_css.html
    |- myCustomRemover_css.html
    |- myCustomEditor_css.html
  |- html/
    |- render.html
    |- remover.html
    |- editor.html
  |- js/         
    |- mainRegister_js.html
    |- mainRemover_js.html
    |- mainEditor_js.html
Vendor/         # 外部ライブラリ / External library
    |- MDL/  
    |- GETMDL-SELECT/
    |- jQuery/
    |- FontAwesome/
    |- CryptoJS/
    |- CryptoGS/
    |- iconatejs/
```

# For Developers
開発する際は、Googleの[clasp](https://github.com/google/clasp)を使用します．
1. Node.jsとnpmを入れる
```
$ node --version
```
でバージョンが4.7.4以上ならOK  

1. claspを入れる  
```
$ npm install -g @google/clasp
```
1. ローカルにcloneする
```
$ clasp clone <scriptID>
```
1. ローカルで修正する  

1. リモートにローカルの更新を反映する
```
$ clasp push
```
