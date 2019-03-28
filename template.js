/*
** @author : Yuto Uemura
** @date : 3/8
**＜テンプレ用＞ 
*/
    
    // googleフォーム
var googleForm = FormApp.openByUrl(GOOGLE_FORM_URL),
    // スプレッドシート(部員には見せない)。
    formSpreadSheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL), //URL(form)のオブジェクトを取得。
    //部員に見せるスプレッドシート。(公開用)
    SPREADSHEET_FOR_CAC_MEMBERS = SpreadsheetApp.openByUrl(''),
    //部員の名前が書かれたシートのURL。(参照用)
    membersSpreadSheet = SpreadsheetApp.openByUrl('').getSheets()[0];

try {
  //閲覧用にシートを前から順に追加していく。
  var newSheet = SPREADSHEET_FOR_CAC_MEMBERS.insertSheet(SHEET_TITLE, SPREADSHEET_FOR_CAC_MEMBERS.getSheets().length);
}catch (error) {
  Logger.log("エラー::実装時取り消すことを考慮する。");
  Logger.log('シートの番号は ' + SPREADSHEET_FOR_CAC_MEMBERS.getSheets().length);
}

var formSheets = SPREADSHEET_FOR_CAC_MEMBERS.getSheetByName(SHEET_TITLE);
    //Logger.log(formSheets.getName() + " : " + typeof(formSheets.getName()));

//これで回答の取り出し。
// var itemResponses = FormApp.openByUrl(url).getResponses()[num].getItemResponses()[num].getResponse()

var nameHash = {}, //Dictionaryの初期化
    cacArray = [], //部員一覧を格納するための配列の初期化
    color = {red: '#FF0000', green: '#00FF00', white: '#FFFFFF'};

/**************************************************ここから**************************************************/

/* スプレッドシートの読み込み */
function copyAndPaste(){

  //部員メンバー一覧からコピペ
  var copyValue = membersSpreadSheet.getRange('A1:B60').getValues();
  formSheets.getRange('A1:B60').setValues(copyValue);

  var cacMember = formSheets.getRange('B1:B60').getValues();
  cacArray = Array.prototype.concat.apply([], cacMember); //2次元から1次元配列へ

  printData();

  // for(var index in cacArray){
  //   if(cacArray[index] == ""){
  //     cacArray.splice(index, 1); //配列内の空白の削除
  //   }
  // }
  // Logger.log(cacArray); //配列内にnullを消した状態で格納してる。
}

/* タイトルの取得 */
function printData(){
//   var titles = googleForm.getItems();
  var formResponses = googleForm.getResponses();
  
  for(var items in formResponses){
    var formRes = formResponses[items],
        itemRes = formRes.getItemResponses();

    for(var item in itemRes){
      var itemResponse = itemRes[item]; //'名前', '意見'が入ってる(配列)
      //名前カラムが一致した時
      if( itemResponse.getItem().getTitle().match('名前') ){ 
        putData( itemResponse.getResponse() ); //名前の追加と初期化
      }
    }
  }
  judge();
}

/* 初期化とデータの格納 */
function putData(name){ //配列形式で渡す
  //{'名前': false}
  nameHash[name] = false; //全てのユーザの真偽値をfalseに。
}

function judge(){
  var count = 0; //行番号

  for(var index in cacArray){
        //名前がないとき、undefinedが帰って!を付けてもfalseと一緒にelseに入ってしまうため==falseにしている。
      if( nameHash[ cacArray[index] ] == false ){
        decorateGreen( formSheets.getRange(count+1, 3) ); //飾り
      }else if(cacArray[index] == "" || cacArray[index] == null){
        decorateWhite( formSheets.getRange(count+1, 3) ); //飾り
      }else{
        decorateRed( formSheets.getRange(count+1, 3) ); //飾り
      }
    //}
    count++;
    //manual('C40');
  }
}

/* 背景色付け・○×表記・中央寄せ */
function decorateGreen(sheetRange){
  sheetRange.setHorizontalAlignment('center'); //中央寄せ
  sheetRange.setValue("○"); //3列目に○を入力する。
  sheetRange.setBackground(color.green); //背景色
}
function decorateRed(sheetRange){
    sheetRange.setHorizontalAlignment('center'); //中央寄せ
    sheetRange.setValue("×"); //3列目に×を入力する。
    sheetRange.setBackground(color.red); //背景色
}
function decorateWhite(sheetRange){
    sheetRange.setValue(""); //3列目に空白を入力する。
    sheetRange.setBackground(color.white); //飾り
}

/* 手動用関数 
function manual(cell1){
  decorateGreen( formSheets.getRange(cell1) );
}*/
