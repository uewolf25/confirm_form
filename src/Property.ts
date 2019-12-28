import Prop = GoogleAppsScript.Properties.Properties;

export class Property {
  private _properteis: Prop = PropertiesService.getScriptProperties();
  private _form: string;
  // private _sheet: string;
  private _sheetForEveryone: string;
  private _sheetMenbers: string;
  private _eventTitle: string;

  constructor() {
    this._form = this._properteis.getProperty('GF_URL');
    // this._sheet = this._properteis.getProperty('SS_URL');
    this._sheetForEveryone = this._properteis.getProperty('SS_FOR_EVERYONE_URL');
    this._sheetMenbers = this._properteis.getProperty('SS_MENBERS_URL');
    this._eventTitle = this._properteis.getProperty('EVENT_TITLE');
    this.alert();
  }

  get getForm(): string {
    return this._form;
  }

  // get getSheet(): string {
  //   return this._sheet;
  // }

  get getSheetForEveryone(): string {
    return this._sheetForEveryone;
  }

  get getSheetMenbers(): string {
    return this._sheetMenbers;
  }

  get getEventName(): string {
    return this._eventTitle;
  }

  private alert() {
    if (!this._form) {
      throw 'You should set "GF_URL" property from [File] > [Project properties] > [Script properties]';
    }
    // if (!this._sheet) {
    //   throw 'You should set "SS_URL" property from [File] > [Project properties] > [Script properties]';
    // }
    if (!this._sheetForEveryone) {
      throw 'You should set "SS_FOR_EVERYONE_URL" property from [File] > [Project properties] > [Script properties]';
    }
    if (!this._sheetMenbers) {
      throw 'You should set "SS_MENBERS_URL" property from [File] > [Project properties] > [Script properties]';
    }
    if (!this._eventTitle) {
      throw 'You should set "EVENT_TITLE" property from [File] > [Project properties] > [Script properties]';
    }
  }
}
