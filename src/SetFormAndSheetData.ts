import { Property } from './Property';
import { Form } from './Form';
import { Sheet } from './Sheet';

export class SetFormAndSheetData{

  private _prop: Property;
  private _form: Form;
  private _sheet: Sheet;

  constructor(prop: Property){
    this._prop = prop;
    this.initialize(this._prop);
  }

  private initialize(prop: Property) {
    this._form = new Form(prop.getForm);
    this._sheet = new Sheet(prop.getSheetForEveryone, prop.getSheetMenbers);
  }
  /**
   * name
   */
  public name(): void {
    
  }

  /**
   * insertSheet
   */
  public insertSheet(): void {
    
  }

}
