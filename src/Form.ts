import Forms = GoogleAppsScript.Forms.Form;
// import FormsApp = GoogleAppsScript.Forms.FormApp;

export class Form /*extends AbstractOpen*/ {
  private url: string;
  public constructor(formUrl: string) {
    this.url = formUrl;
    // super(formUrl);
  }

  /**
   * openApps
   * @param
   * @returns
   */
  public openApps(): Forms {
    const FormObject: Forms = FormApp.openByUrl(this.url);
    return FormObject;
  }
}
