import { Property } from './Property';
import { Form } from './Form';
import { Sheet } from './Sheet';

export class SetFormAndSheetData {
  private _prop: Property;
  private _form: Form;
  private _sheet: Sheet;
  private answeredMenber: { [key: string]: boolean } = {};

  public constructor(prop: Property) {
    this._prop = prop;
    this.initialize(this._prop);
  }

  private initialize(prop: Property) {
    this._form = new Form(prop.getForm);
    this._sheet = new Sheet(prop.getSheetForEveryone, prop.getSheetMenbers);
  }

  /**
   * debugMethod
   * @param
   * @returns
   */
  public debugMethod() {
    // this._sheet.setForEveryoneSheetName(this._prop.getEventName);
    // this._sheet.insertSheets(this._prop.getEventName);
    this.answeredMenber = this._form.getTitle(this.answeredMenber);
    Logger.log(this.answeredMenber);
  }
}
