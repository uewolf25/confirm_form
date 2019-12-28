import { Property } from './property';
import { SetFormAndSheetData } from './SetFormAndSheetData';

// main
declare var global: any;

global.caconfirm = (): void => {
  const prop: Property = new Property();
  const setData: SetFormAndSheetData = new SetFormAndSheetData(prop);
};
