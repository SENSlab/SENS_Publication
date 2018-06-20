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
Public/          # クライアントサイドの処理 / Cleint side processing
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
開発する際は、Googleのスクリプトエディタを使用します。  
ディレクトリという概念がないため、すべてのファイルが同じ階層に存在します。  
GitHubにあげたファイルは、各ファイルの役割が分かりやすくなるよう、説明的な意味でディレクトリ構造にしています。  
ですので、スクリプトエディタで開発する際は、ディレクトリ構造になっていないことを気にしなくてOKです。

When developing, we use Google's script editor.  
Because there is no concept of a directory, all files are in the same hierarchy.  
The file given in GitHub has a directory structure in a descriptive sense so that the role of each file becomes easy to understand.  
So, when developing with the script editor, do not worry about not having a directory structure
