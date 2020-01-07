import Forms = GoogleAppsScript.Forms.Form;
import FormsResponse = GoogleAppsScript.Forms.FormResponse;
import FormItemResponse = GoogleAppsScript.Forms.ItemResponse;

export class Form /*extends AbstractOpen*/ {
  private url: string; // Google Form URL with editing authority via Property Class .
  private _formObject: Forms;
  private _formResponses: FormsResponse[];

  public constructor(formUrl: string) {
    this.url = formUrl;
    // super(formUrl);
    this.initialize();
  }

  /**
   * - initialize Form objects .
   */
  private initialize() {
    this._formObject = this.openApps();
    this._formResponses = this._formObject.getResponses();
  }

  /**
   * - Create Form object(FormApp) by setting form URL .
   * @returns FormObject
   */
  public openApps(): Forms {
    const FormObject: Forms = FormApp.openByUrl(this.url);
    return FormObject;
  }

  /**
   * - Get any properties(ex. 学生証番号) from Form .
   * @param answeredMenber key->student number: string, value-> true or false: boolean
   * @returns
   */
  public getTitle(answeredMenber: { [key: string]: boolean }) {
    for (let items in this._formResponses) {
      let itemResponse: FormItemResponse[] = this._formResponses[items].getItemResponses();

      for (let numbers in itemResponse) {
        let studentNumberList: FormItemResponse = itemResponse[numbers];
        let formColumnTitle: string = studentNumberList.getItem().getTitle();

        if (formColumnTitle.match('学生番号') || formColumnTitle.match('学生証番号')) {
          // let str = String(studentNumberList.getResponse());
          // ↓　Probably, it is hard for this editor to judge what class type is .
          // answeredMenber[studentNumberList.getResponse()] = true;
          answeredMenber[String(studentNumberList.getResponse())] = true;
          continue;
        }
      }
    }
    // Logger.log(answeredMenber);
    return answeredMenber;
  }
}
