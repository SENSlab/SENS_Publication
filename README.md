# SENS Publication Manager

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

[English](https://github.com/SENSlab/SENS_Publication/blob/master/README-en.md) is below!!  
佐藤研究室の業績情報データベース「SENS Publicaton」へのデータ追加，削除，編集が可能です．

## 機能

機能は以下の3点です．

1. 業績情報の登録 ([SENS Publication Register](#sens-publication-register))
1. 業績情報の削除 ([SENS Publication Remover](#sens-publication-remover))
1. 業績情報の編集 ([SENS Publication Editor](#sens-publication-editor))

## 使用方法

### SENS Publication Register

業績情報を登録することができます．

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

6. "SUBMIT"ボタンを押してください．下の画像のような文が表示されていればOKです．  
<img src="https://github.com/SENSlab/SENS_Publication/blob/images/submit.PNG" width="18%">  

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

6. "SUBMIT"ボタンを押してください．下の画像のような文が表示されていればOKです．  
<img src="https://github.com/SENSlab/SENS_Publication/blob/images/submit.PNG" width="18%">  


#### 注意点

- 業績情報をアップロードした後は，念のため，業績情報用のSpread Sheetに追加した情報が反映されているか確認してください．

- 不安定なネット環境では，失敗しやすいです．良好なネット環境で使用してください．

- 不安定なネット環境であったり，アップロードするpdfファイルのサイズが大きい場合，アップロードに時間がかかります．ロードバーが消えるまで気長にお待ちください．


### SENS Publication Remover

業績情報を削除することができます．

リンク: [SENS Publication Remover](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=remover)  
使用するにはSENSのGoogleアカウントが必要です．

#### 画面説明



#### 使用手順

1. "カテゴリー"のドロップダウンリストから削除する業績情報のカテゴリーを選択してください．

2. "年"のドロップダウンリストから削除する業績情報の年を選択してください．

3. "SEARCH"ボタンを押してください．削除候補が表示されます．

4. 削除したい業績情報の行のマイナスボタンを押してください．マイナスボタンが赤色になればOKです．

5. 研究室ホームページからも業績情報を削除したい場合は，"Public"にチェックを入れてください．研究室ホームページに該当する業績情報が登録されていない場合は，"Public"にチェックを入れることはできません．

6. "DELETE"ボタンを押してください．下の画像のような文が表示されていればOKです．
<img src="https://github.com/SENSlab/SENS_Publication/blob/images/delete.PNG" width="18%">  

#### 注意点
- マイナスボタンは一つしか選択できません．

- "カテゴリー"を選択した直後に"年"のドロップダウンリストをクリックすると，何も表示されない場合があります．お手数をお掛けしますが，もう一度クリックし直してください．

- 業績情報を削除した後は，業績情報用のSpread SheetやGoogle Driveに削除した情報が存在しないことを確認してください．


### SENS Publication Editor

業績情報を編集することができます．

リンク: [SENS Publication Editor](https://script.google.com/a/sens.sys.es.osaka-u.ac.jp/macros/s/AKfycbwXxc8mGbcukLNakZh90Phw4v6tRSXbrqKIHnwEkqEJ-89naE0/exec?p=editor)  
使用するにはSENSのGoogleアカウントが必要です．

#### 画面説明



#### 使用手順

1. "カテゴリー"のドロップダウンリストから編集する業績情報のカテゴリーを選択しください．

2. "年"のドロップダウンリストから編集する業績情報の年を選択してください．

3. "SEARCH"ボタンを押してください．

4. 編集したい業績情報の行の鉛筆ボタンを押してください．鉛筆ボタンがオレンジ色になればOKです．

5. "編集項目"のドロップダウンリストから編集したい項目を選択してください．

6. 編集してください．

7. 研究室ホームページの業績情報も編集したい場合は，"Public"にチェックを入れてください．研究室ホームページに該当する業績情報が登録されていない場合は，"Public"にチェックを入れることはできません．

8. "EDIT"ボタンを押してください．下の画像のような文が表示されていればOKです．
<img src="https://github.com/SENSlab/SENS_Publication/blob/images/edit.PNG" width="18%">  

#### 注意点

- 編集ボタンは一つしか選択できません．

- "カテゴリー"を選択した直後に"年"のドロップダウンリストをクリックすると，何も表示されない場合があります．お手数をお掛けしますが，もう一度クリックし直してください．

- 業績情報を編集した後は，業績情報用のSpread SheetやGoogle Driveに編集した情報が反映されていることを確認してください．

- "編集項目"がファイルである場合，ネット環境が良好でないと失敗しやすいです．良好なネット環境で使用してください．


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

