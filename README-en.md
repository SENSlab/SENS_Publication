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

<img src="https://github.com/SENSlab/SENS_Publication/blob/images/error_CantOpenPage.PNG" width="40%">  
If you see the aboce screen, please sign in to Google with SENS Google account and try again.  
Or try opening a link in secret mode.

#### Screen Description

<img src="https://github.com/SENSlab/SENS_Publication/blob/images/MainRegister.PNG">

<img src="https://github.com/SENSlab/SENS_Publication/blob/images/MenuRegister.PNG"> 

1. Menu Button  
When pressed, the menu will be displayed like the second image.

2. Publication information form

3. Public/Private check box  
Public: If checked, information will be reflected on the homepage.  
Private: If checked, information will be reflected in the database in the laboratory.

4. SUBMIT button  
Press to register publication information.

5. Menu bar  
Remover: Press to switch to SENS Publication Remover.  
Editor: Press to switch to SENS Publication Editor.

#### Steps

1. Select the category of the publication information to be registered from the "Category" drop down list.  
Selectable categories are as follows:  
    - Award
    - Journal
    - International Conference
    - Domestic Conference
    - Survey
    - Press
    - Book
    - Unknown
    - PhD Thesis
    - Master Thesis
    - Bachelor Thesis


2. Select the year of the publication information to be registered from the "Year" drop down list.  
Selectable years are from 2003 to this year.

**When you select "Award" in "Category"**

3. Enter the award name int the text area of "Type of Award".  
Ex:
    - Best Paper Runner Up Award (IEEE ISMAR 2016)  

4. Enter the name of the winner in the text area of "Detail".

5. Please check "Public" to reflect the publication information on the homepage.
Please check "Private" to reflect information in the database in the laboratory. **It can be checked more than once**.

6. Press the "SUBMIT" button. If the sentence like the image below is displayed, it is OK.  
<img src = "https://github.com/SENSlab/SENS_Publication/blob/images/submit.PNG" width = "18%">

** When you select other than "Award" in "Category"**

3. Enter performance information like the example in the text area of "Details".
Ex.:
    - Naruki Tanabe, Yuki Asai, Ryuichi Enomoto, Haruka Matsukura, Daisuke Iwai, and Kosuke Sato, "Haptic Feedback to Non Manipulating Hand in Manipulating Virtual Hand", In Proceedings of IEEE Haptics Symposium 2018 Demonstrations, p. 125, 2018.


4. Attach the pdf file to the "file" form. Please rename the file as shown.  
Ex:
    - 2018_Interaction_N-Tanabe.pdf
    - 2018_IEEEHapticsSymposium_N-Tanabe.pdf


5. Please check "Public" to reflect the publication information on the homepage.
Please check "Private" to reflect information in the database in the laboratory. **It can be checked more than once**.

6. Press the "SUBMIT" button. If the sentence like the image below is displayed, it is OK.  
<img src = "https://github.com/SENSlab/SENS_Publication/blob/images/submit.PNG" width = "18%">


#### Notice

- After uploading the publication information, please make sure that the publication information was added to the Spread Sheet for publication information, just in case.

- In an unstable net environment, it is easy to fail. Please use it in a good net environment.

- If it is an unstable net environment or the size of the upload pdf file is large, uploading takes time. Please wait patiently until the load bar disappears, thank you.


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
