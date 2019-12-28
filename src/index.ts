import { Property } from './Property';
import { SetFormAndSheetData } from './SetFormAndSheetData';

// main
declare var global: any;

global.caconfirm = (): void => {
  const prop: Property = new Property();
  const setData: SetFormAndSheetData = new SetFormAndSheetData(prop);
  // try{
  //   ScriptApp.newTrigger('copyAndPaste')/* 一番初めに実行する関数名を入れる */
  //   .forForm(FormUrl/* をopenByUrl */)
  //   .onFormSubmit()
  //   .create();
  //   Logger.log('successly create trigger .');
  // }catch(error){
  //   Logger.log('Miss: cannot set trigger');
  // }
};
