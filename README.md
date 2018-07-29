# SENS Publication Manager

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[English](#sens-publication-manager-in-english) is below!!  
佐藤研究室の業績情報データベース「SENS Publicaton」へのデータ追加，削除，編集が可能です．

## 機能

機能は以下の3点です．

1. 業績情報の登録 ([SENS Publication Register](#sens-publication-register))
1. 業績情報の削除 ([SENS Publication Remover](#sens-publication-remover))
1. 業績情報の編集 ([SENS Publication Editor](#sens-publication-editor))

## 使用方法

### SENS Publication Register

リンク: [SENS Publication Register](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=register)  
使用するにはSENSのGoogleアカウントが必要です．

<img src="https://github.com/SENSlab/SENS_Publication/blob/images/error_CantOpenPage.PNG" width="40%">  
上記画面が表示された場合，SENSのGoogleアカウントでGoogleにサインインした後，もう一度試してみてください．  
もしくは，シークレットモードにてリンクを開いてみてください．

#### 画面説明



#### 使用手順

1. "カテゴリー"のドロップダウンリストから登録する業績情報のカテゴリーを選択してください．  
選択可能なカテゴリーは以下の通りです．
    - 受賞
    - 論文
    - 国際会議
    - 国内会議
    - 解説記事
    - 報道発表
    - 著書
    - 不明
    - 博士論文
    - 修士論文
    - 学士論文


2. "年"のドロップダウンリストから登録する業績情報の年を選択してください．  
2003年～今年までの年が選択可能です．

**"カテゴリー"で"受賞"を選択した場合**  

3. "受賞内容"のテキストエリアに受賞内容を入力してください．  
例:
    - 最優秀発表賞
    - Best Paper Runner Up Award (IEEE ISMAR 2016)  


4. "詳細"のテキストエリアに受賞者の名前を入力してください．

5. 研究室ホームページに情報を反映させる場合，"Public"にチェックを入れてください．研究室内のデータベースに情報を反映させる場合，"Private"にチェックを入れてください．**複数にチェック可能**です．

**"カテゴリー"で"受賞"以外を選択した場合**  

3. "詳細"のテキストエリアに例のような業績情報を入力してください．  
例:  
    - 田辺育暉, 浅井唯貴, 榎本龍一, 松倉悠, 岩井大輔, 佐藤宏介, "仮想手操作における非操作手への触覚呈示手法の検討", 情報処理学会インタラクション2018論文集, pp. 785-790, 2018.  
    - Naruki Tanabe, Yuki Asai, Ryuichi Enomoto, Haruka Matsukura, Daisuke Iwai, and Kosuke Sato, "Haptic Feedback to Non-Manipulating Hand in Manipulating Virtual Hand", In Proceedings of IEEE Haptics Symposium 2018 Demonstrations, p. 125, 2018.


4. "ファイル"のフォームにpdfファイルを添付してください．ファイル名は例のようにしてください．  
例:
    - 2018_Interaction_N-Tanabe.pdf
    - 2018_IEEEHapticsSymposium_N-Tanabe.pdf


5. 研究室ホームページに情報を反映させる場合，"Public"にチェックを入れてください．研究室内のデータベースに情報を反映させる場合，"Private"にチェックを入れてください．**複数にチェック可能**です．  

#### 注意点


### SENS Publication Remover

リンク: [SENS Publication Remover](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=remover)  
使用するにはSENSのGoogleアカウントが必要です．

#### 画面説明



#### 使用手順



#### 注意点



### SENS Publication Editor

リンク: [SENS Publication Editor](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=editor)  
使用するにはSENSのGoogleアカウントが必要です．

#### 画面説明



#### 使用手順



#### 注意点



## 開発者向け

### ディレクトリ構造

```
App/             # サーバーサイドの処理
  |- Main.gs
  |- Cipher.gs
  |- DriveManager.gs
  |- FileManager.gs
  |- SpreadSheetManager.gs
  |- Register.gs
  |- Remover.gs
  |- Editor.gs
Public/          # クライアントサイドの処理
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
Vendor/         # 外部ライブラリ
    |- MDL/  
    |- GETMDL-SELECT/
    |- jQuery/
    |- FontAwesome/
    |- CryptoJS/
    |- CryptoGS/
    |- iconatejs/
```

### 開発手順

開発する際は、Googleの[clasp](https://github.com/google/clasp)を使用します．
1. Node.jsとnpmをインストールする

    <a href="https://qiita.com/Masayuki-M/items/840a997a824e18f576d8">
    Windows
    </a>
    <img src="https://raw.githubusercontent.com/SENSlab/SENS_Publication/images/windows-brands.svg?sanitize=true" width="15">&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://qiita.com/sugasaki/items/ad4d5d88965057840a04">
    MacOS
    </a>
    <img src="https://raw.githubusercontent.com/SENSlab/SENS_Publication/images/apple-brands.svg?sanitize=true" width="15" >

        $ node --version  

    でバージョンが4.7.4以上ならOK  

1. claspをインストールする

        $ npm install -g @google/clasp

1. ローカルにcloneする

        $ clasp clone <scriptID>

1. ログインする

        $ clasp login

1. ローカルで修正する  

1. リモートにローカルの更新を反映する

        $ clasp push

## ライセンス

[MPL 2.0](https://github.com/SENSlab/SENS_Publication/blob/master/LICENSE)

# Sens Publication Manager (in ENGLISH)

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

You can register publication data, remove it, and edit it to "SENS Publication".  
"SENS Publication" is the publication database in SENS Lab..

## Features

There are three functions.

1. Register publication data
1. Delete publication data
1. Edit publication data

## Usage

### Sens Publication Register

You can register publication data from the link below.  
[sens publicaion register](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=register)  

**You need SENS's Google account.**

#### Steps



#### Notice



### Sens Publication Remover
You can delete publication data from the link below.  
[sens publicaion remover](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=remover)  

**You need SENS's Google account.**

#### Steps



#### Notice



### Sens Publication Editor
You can edit publication data from the link below.  
[sens publicaion editor](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=editor)  

**You need SENS's Google account.**

#### Steps



#### Notice



## For Developers

### Directory Structure

```
App/             # Server side processing
  |- Main.gs
  |- Cipher.gs
  |- DriveManager.gs
  |- FileManager.gs
  |- SpreadSheetManager.gs
  |- Register.gs
  |- Remover.gs
  |- Editor.gs
Public/          # Client side processing
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
Vendor/         # External library
    |- MDL/  
    |- GETMDL-SELECT/
    |- jQuery/
    |- FontAwesome/
    |- CryptoJS/
    |- CryptoGS/
    |- iconatejs/
```

### Development Steps

You should use [google/clasp](https://github.com/google/clasp)．

1. Install Node.js and npm

    <a href="https://qiita.com/Masayuki-M/items/840a997a824e18f576d8">
    Windows
    </a>
    <img src="https://raw.githubusercontent.com/SENSlab/SENS_Publication/images/windows-brands.svg?sanitize=true" width="15">&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://qiita.com/sugasaki/items/ad4d5d88965057840a04">
    MacOS
    </a>
    <img src="https://raw.githubusercontent.com/SENSlab/SENS_Publication/images/apple-brands.svg?sanitize=true" width="15" >

        $ node --version  

    Required virsion is higher than 4.7.4.   

1. Install google/clasp

        $ npm install -g @google/clasp

1. Clone to your local PC

        $ clasp clone <scriptID>

1. Login

        $ clasp login

1. Modify codes in your local PC  

1. Push your local updates to remote like GitHub

        $ clasp push

## License

[MPL 2.0](https://github.com/SENSlab/SENS_Publication/blob/master/LICENSE)
