
# Sens Publication (Will be released in September)
There are three functions.
1. Register publication data
2. Delete publication data
3. Edit publication data (Now coding...)

# Sens Publication Register
You can register publication data from the link below.  
[sens publicaion register](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbx83bRrCsXBxZspYmc8H4hlQb4uXStNlL8RuuSmR_0yZKsPh9Ak/exec)  

**You need sens account.**

# Sens Publication Remover
You can delete publication data from the link below.  
[sens publicaion remover](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwGlMmniX9q-62zITyaNu4IwRe5BYjvVQZ8z6uEnUABXoVZnxPn/exec)  

**You need sens account.**

# Directory Structure
```
sens_publication_register/
    |- index.html  
    |- app/
        |- Code.gs     # サーバーサイドの処理 / Server side processing
    |- assets/
        |- js/         # クライアントサイドの処理 / Cleint side processing
            |- main_js.html
        |- css/        # 個人設定したcss / My custom css
            |- myCustom_css.html
    |- vendor/         # 外部ライブラリ / External library
        |- MDL/  
        |- GETMDL-SELECT/
        |- jQuery/
        |- FontAwesome/
        |- CryptoJS/
        |- CryptoGS/

sens_publication_remover/
    |- index.html  
    |- app/
        |- Code.gs     # サーバーサイドの処理 / Server side processing
    |- assets/
        |- js/         # クライアントサイドの処理 / Cleint side processing
            |- main_js.html
        |- css/        # 個人設定したcss / My custom css
            |- myCustom_css.html
    |- vendor/         # 外部ライブラリ / External library
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
