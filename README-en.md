# Sens Publication Manager

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
