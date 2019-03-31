
export class Setting{
  public static endpoint = "http://ranchera.dfb.com.do";

  public static login (){ return `${Setting.endpoint}/login`;}
  public static invoices(){return `${Setting.endpoint}/protected/invoices`;}
  public static payments(){return `${Setting.endpoint}/protected/payments`;}
  public static employees(){return `${Setting.endpoint}/protected/employees`;}
  public static authorizations(){return `${Setting.endpoint}/protected/tokens`;}
  public static customers(){ return `${Setting.endpoint}/protected/customers`;}
  public static routes(){return `${Setting.endpoint}/protected/routes`}
  public static dashboard(){return `${Setting.endpoint}/protected/dashboard`}
  public static connectToErp(){return `${Setting.endpoint}/connect-to-erp`;}
}
