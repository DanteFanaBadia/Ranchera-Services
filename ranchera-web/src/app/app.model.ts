export interface PrimaryPhone {
  id?: any;
  deviceType?: any;
  countryCode?: any;
  areaCode?: any;
  exchangeCode?: any;
  extension?: any;
  freeFormNumber: string;
  tag?: any;
  default?: any;
}


export interface MetaData {
  createdByRef?: any;
  createTime: Date;
  lastModifiedByRef?: any;
  lastUpdatedTime: Date;
  lastChangedInQB?: any;
  synchronized?: any;
}

export interface PrimaryEmailAddr {
  id?: any;
  address: string;
  tag?: any;
  default?: any;
}

export interface PrimaryAddr {
  id: string;
  line1: string;
  line2: string;
  line3?: any;
  line4?: any;
  line5?: any;
  city: string;
  country: string;
  countryCode?: any;
  countrySubDivisionCode: string;
  postalCode: string;
  postalCodeSuffix?: any;
  lat?: any;
  tag?: any;
  note?: any;
  long?: any;
}

export interface User {
  id: string;
  syncToken: string;
  metaData: MetaData;
  customField: any[];
  attachableRef: any[];
  domain: string;
  status?: any;
  sparse: boolean;
  intuitId?: any;
  organization?: any;
  title?: any;
  givenName: string;
  middleName?: any;
  familyName: string;
  suffix?: any;
  fullyQualifiedName?: any;
  companyName?: any;
  displayName: string;
  printOnCheckName: string;
  userId?: any;
  active: boolean;
  primaryPhone: PrimaryPhone;
  alternatePhone?: any;
  mobile?: any;
  fax?: any;
  primaryEmailAddr: PrimaryEmailAddr;
  webAddr?: any;
  otherContactInfo: any[];
  defaultTaxCodeRef?: any;
  employeeType?: any;
  employeeNumber: string;
  ssn?: any;
  primaryAddr: PrimaryAddr;
  otherAddr: any[];
  billableTime: boolean;
  billRate?: any;
  birthDate?: any;
  gender?: any;
  hiredDate?: any;
  releasedDate?: any;
  useTimeEntry?: any;
  employeeEx?: any;
}

export interface LoginForm {
  username?: string;
  password?: string;
}


export interface MetaData {
  createdByRef?: any;
  createTime: Date;
  lastModifiedByRef?: any;
  lastUpdatedTime: Date;
  lastChangedInQB?: any;
  synchronized?: any;
}

export interface CustomField {
  definitionId: string;
  name: string;
  type: string;
  stringValue: string;
  booleanValue?: any;
  dateValue?: any;
  numberValue?: any;
}

export interface CurrencyRef {
  value: string;
  name: string;
  type?: any;
}

export interface LinkedTxn {
  txnId: string;
  txnType: string;
  txnLineId?: any;
}

export interface DiscountAccountRef {
  value: string;
  name: string;
  type?: any;
}

export interface DiscountLineDetail {
  discountRef?: any;
  percentBased: boolean;
  discountPercent: number;
  discountAccountRef: DiscountAccountRef;
  serviceDate?: any;
  classRef?: any;
  taxCodeRef?: any;
  discountLineDetailEx?: any;
}

export interface ItemRef {
  value: string;
  name: string;
  type?: any;
}

export interface ItemAccountRef {
  value: string;
  name: string;
  type?: any;
}

export interface TaxCodeRef {
  value: string;
  name?: any;
  type?: any;
}

export interface SalesItemLineDetail {
  itemRef: ItemRef;
  classRef?: any;
  unitPrice?: number;
  ratePercent?: any;
  priceLevelRef?: any;
  markupInfo?: any;
  qty?: number;
  itemAccountRef: ItemAccountRef;
  inventorySiteRef?: any;
  taxCodeRef: TaxCodeRef;
  taxClassificationRef?: any;
  serviceDate?: number;
  taxInclusiveAmt?: any;
  discountRate?: any;
  discountAmt?: any;
  salesItemLineDetailEx?: any;
  uomref?: any;
}

export interface SubTotalLineDetail {
  itemRef?: any;
  serviceDate?: any;
}

export interface TxnTaxCodeRef {
  value: string;
  name?: any;
  type?: any;
}

export interface TaxRateRef {
  value: string;
  name?: any;
  type?: any;
}

export interface TaxLineDetail {
  taxRateRef: TaxRateRef;
  percentBased: boolean;
  taxPercent: number;
  netAmountTaxable: number;
  taxInclusiveAmount?: any;
  overrideDeltaAmount?: any;
  serviceDate?: any;
  taxLineDetailEx?: any;
}

export interface TaxLine {
  id?: any;
  lineNum?: any;
  description?: any;
  amount: number;
  linkedTxn: any[];
  detailType: string;
  paymentLineDetail?: any;
  discountLineDetail?: any;
  taxLineDetail: TaxLineDetail;
  salesItemLineDetail?: any;
  descriptionLineDetail?: any;
  itemBasedExpenseLineDetail?: any;
  accountBasedExpenseLineDetail?: any;
  depositLineDetail?: any;
  purchaseOrderItemLineDetail?: any;
  salesOrderItemLineDetail?: any;
  itemReceiptLineDetail?: any;
  journalEntryLineDetail?: any;
  groupLineDetail?: any;
  subTotalLineDetail?: any;
  customField: any[];
  lineEx?: any;
  tdslineDetail?: any;
}

export interface TxnTaxDetail {
  defaultTaxCodeRef?: any;
  txnTaxCodeRef: TxnTaxCodeRef;
  totalTax: number;
  taxLine: TaxLine[];
}

export interface CustomerRef {
  value: string;
  name: string;
  type?: any;
}

export interface CustomerMemo {
  value: string;
  id?: any;
}

export interface ShipAddr {
  id: string;
  line1: string;
  line2?: any;
  line3?: any;
  line4?: any;
  line5?: any;
  city: string;
  countryCode?: any;
  countrySubDivisionCode: string;
  postalCode: string;
  postalCodeSuffix?: any;
  lat: string;
  tag?: any;
  note?: any;
  long: string;
}

export interface SalesTermRef {
  value: string;
  name?: any;
  type?: any;
}

export interface BillEmail {
  id?: any;
  address: string;
  tag?: any;
  default?: any;
}

export interface DeliveryInfo {
  deliveryType: string;
  deliveryTime?: any;
  deliveryErrorType?: any;
}

export interface Invoice {
  id: string;
  syncToken: string;
  metaData: MetaData;
  customField: CustomField[];
  attachableRef: any[];
  domain: string;
  status?: any;
  sparse: boolean;
  docNumber: string;
  txnDate: any;
  departmentRef?: any;
  currencyRef: CurrencyRef;
  exchangeRate?: any;
  privateNote: string;
  txnStatus?: any;
  linkedTxn: LinkedTxn[];
  line: Line[];
  txnTaxDetail: TxnTaxDetail;
  txnSource?: any;
  taxFormType?: any;
  taxFormNum?: any;
  transactionLocationType?: any;
  autoDocNumber?: any;
  customerRef: CustomerRef;
  customerMemo: CustomerMemo;
  billAddr: BillAddr;
  shipAddr: ShipAddr;
  freeFormAddress: boolean;
  remitToRef?: any;
  classRef?: any;
  salesTermRef: SalesTermRef;
  dueDate: any;
  salesRepRef?: any;
  fob?: any;
  shipMethodRef?: any;
  shipDate?: any;
  trackingNum?: any;
  globalTaxCalculation?: any;
  totalAmt: number;
  homeTotalAmt?: any;
  applyTaxAfterDiscount: boolean;
  templateRef?: any;
  printStatus: string;
  emailStatus: string;
  billEmail: BillEmail;
  billEmailCc?: any;
  billEmailBcc?: any;
  balance: number;
  homeBalance?: any;
  financeCharge?: any;
  paymentMethodRef?: any;
  paymentRefNum?: any;
  paymentType?: any;
  checkPayment?: any;
  creditCardPayment?: any;
  depositToAccountRef?: any;
  deliveryInfo: DeliveryInfo;
  discountRate?: any;
  discountAmt?: any;
  govtTxnRefIdentifier?: any;
  taxExemptionRef?: any;
  deposit: number;
  allowIPNPayment: boolean;
  allowOnlinePayment: boolean;
  allowOnlineCreditCardPayment: boolean;
  allowOnlineACHPayment: boolean;
  invoiceStatus?: any;
  callToAction?: any;
  invoiceStatusLog: any[];
  invoiceEx?: any;
  einvoiceStatus?: any;
  ecloudStatusTimeStamp?: any;
  araccountRef?: any;
  ponumber?: any;
}

export interface Employee {
  id: string;
  syncToken: string;
  metaData: MetaData;
  customField: any[];
  attachableRef: any[];
  domain: string;
  status?: any;
  sparse: boolean;
  intuitId?: any;
  organization?: any;
  title?: any;
  givenName: string;
  middleName?: any;
  familyName: string;
  suffix?: any;
  fullyQualifiedName?: any;
  companyName?: any;
  displayName: string;
  printOnCheckName: string;
  userId?: any;
  active: boolean;
  primaryPhone: PrimaryPhone;
  alternatePhone?: any;
  mobile?: any;
  fax?: any;
  primaryEmailAddr: PrimaryEmailAddr;
  webAddr?: any;
  otherContactInfo: any[];
  defaultTaxCodeRef?: any;
  employeeType?: any;
  employeeNumber: string;
  ssn?: any;
  primaryAddr: PrimaryAddr;
  otherAddr: any[];
  billableTime: boolean;
  billRate?: any;
  birthDate?: any;
  gender?: any;
  hiredDate?: any;
  releasedDate?: any;
  useTimeEntry?: any;
  employeeEx?: any;
}

export interface MetaData {
  createdByRef?: any;
  createTime: Date;
  lastModifiedByRef?: any;
  lastUpdatedTime: Date;
  lastChangedInQB?: any;
  synchronized?: any;
}

export interface CurrencyRef {
  value: string;
  name: string;
  type?: any;
}

export interface LinkedTxn {
  txnId: string;
  txnType: string;
  txnLineId?: any;
}

export interface LinkedTxn2 {
  txnId: string;
  txnType: string;
  txnLineId?: any;
}

export interface Value {
  Name: string;
  Value: string;
}

export interface Any {
  name: string;
  declaredType: string;
  scope: string;
  value: Value;
  nil: boolean;
  globalScope: boolean;
  typeSubstituted: boolean;
}

export interface LineEx {
  any: Any[];
}

export interface Line {
  id?: any;
  lineNum?: any;
  description?: any;
  amount: number;
  linkedTxn: LinkedTxn2[];
  detailType?: any;
  paymentLineDetail?: any;
  discountLineDetail?: any;
  taxLineDetail?: any;
  salesItemLineDetail?: any;
  descriptionLineDetail?: any;
  itemBasedExpenseLineDetail?: any;
  accountBasedExpenseLineDetail?: any;
  depositLineDetail?: any;
  purchaseOrderItemLineDetail?: any;
  salesOrderItemLineDetail?: any;
  itemReceiptLineDetail?: any;
  journalEntryLineDetail?: any;
  groupLineDetail?: any;
  subTotalLineDetail?: any;
  customField: any[];
  lineEx: LineEx;
  tdslineDetail?: any;
}

export interface CustomerRef {
  value: string;
  name: string;
  type?: any;
}

export interface DepositToAccountRef {
  value: string;
  name?: any;
  type?: any;
}

export interface PaymentMethodRef {
  value: string;
  name?: any;
  type?: any;
}

export interface Payment {
  id: string;
  syncToken: string;
  metaData: MetaData;
  customField: any[];
  attachableRef: any[];
  domain: string;
  status?: any;
  sparse: boolean;
  docNumber?: any;
  txnDate: Date;
  departmentRef?: any;
  currencyRef: CurrencyRef;
  exchangeRate?: any;
  privateNote: string;
  txnStatus?: any;
  linkedTxn: LinkedTxn[];
  line: Line[];
  txnTaxDetail?: any;
  txnSource?: any;
  taxFormType?: any;
  taxFormNum?: any;
  transactionLocationType?: any;
  customerRef: CustomerRef;
  remitToRef?: any;
  depositToAccountRef: DepositToAccountRef;
  paymentMethodRef: PaymentMethodRef;
  paymentRefNum: string;
  paymentType?: any;
  checkPayment?: any;
  creditCardPayment?: any;
  totalAmt: number;
  unappliedAmt: number;
  processPayment: boolean;
  paymentEx?: any;
  araccountRef?: any;
}

export interface Authorization {
  id: number;
  idToken?: any;
  refreshToken: string;
  accessToken: string;
  tokenType: string;
  created: number;
  expiresIn: number;
  xrefreshTokenExpiresIn: number;
}

export interface MetaData {
  createdByRef?: any;
  createTime: Date;
  lastModifiedByRef?: any;
  lastUpdatedTime: Date;
  lastChangedInQB?: any;
  synchronized?: any;
}

export interface PrimaryPhone {
  id?: any;
  deviceType?: any;
  countryCode?: any;
  areaCode?: any;
  exchangeCode?: any;
  extension?: any;
  freeFormNumber: string;
  tag?: any;
  default?: any;
}

export interface Mobile {
  id?: any;
  deviceType?: any;
  countryCode?: any;
  areaCode?: any;
  exchangeCode?: any;
  extension?: any;
  freeFormNumber: string;
  tag?: any;
  default?: any;
}

export interface Fax {
  id?: any;
  deviceType?: any;
  countryCode?: any;
  areaCode?: any;
  exchangeCode?: any;
  extension?: any;
  freeFormNumber: string;
  tag?: any;
  default?: any;
}

export interface PrimaryEmailAddr {
  id?: any;
  address: string;
  tag?: any;
  default?: any;
}

export interface WebAddr {
  id?: any;
  uri: string;
  tag?: any;
  default?: any;
}

export interface DefaultTaxCodeRef {
  value: string;
  name?: any;
  type?: any;
}

export interface BillAddr {
  id: string;
  line1: string;
  line2?: any;
  line3?: any;
  line4?: any;
  line5?: any;
  city: string;
  country: string;
  countryCode?: any;
  countrySubDivisionCode: string;
  postalCode: string;
  postalCodeSuffix?: any;
  lat: string;
  tag?: any;
  note?: any;
  long: string;
}

export interface ShipAddr {
  id: string;
  line1: string;
  line2?: any;
  line3?: any;
  line4?: any;
  line5?: any;
  city: string;
  country: string;
  countryCode?: any;
  countrySubDivisionCode: string;
  postalCode: string;
  postalCodeSuffix?: any;
  lat: string;
  tag?: any;
  note?: any;
  long: string;
}

export interface ParentRef {
  value: string;
  name?: any;
  type?: any;
}

export interface CurrencyRef {
  value: string;
  name: string;
  type?: any;
}

export interface Customer {
  id: string;
  syncToken: string;
  metaData: MetaData;
  customField: any[];
  attachableRef: any[];
  domain: string;
  status?: any;
  sparse: boolean;
  intuitId?: any;
  organization?: any;
  title?: any;
  givenName: string;
  middleName: string;
  familyName: string;
  suffix?: any;
  fullyQualifiedName: string;
  companyName: string;
  displayName: string;
  printOnCheckName: string;
  userId?: any;
  active: boolean;
  primaryPhone: PrimaryPhone;
  alternatePhone?: any;
  mobile: Mobile;
  fax: Fax;
  primaryEmailAddr: PrimaryEmailAddr;
  webAddr: WebAddr;
  otherContactInfo: any[];
  defaultTaxCodeRef: DefaultTaxCodeRef;
  taxable: boolean;
  billAddr: BillAddr;
  shipAddr: ShipAddr;
  otherAddr: any[];
  contactName?: any;
  altContactName?: any;
  notes?: any;
  job: boolean;
  billWithParent: boolean;
  rootCustomerRef?: any;
  parentRef: ParentRef;
  level?: number;
  customerTypeRef?: any;
  salesTermRef?: any;
  salesRepRef?: any;
  taxGroupCodeRef?: any;
  taxRateRef?: any;
  paymentMethodRef?: any;
  priceLevelRef?: any;
  balance: number;
  openBalanceDate?: any;
  balanceWithJobs: number;
  creditLimit?: any;
  acctNum?: any;
  currencyRef: CurrencyRef;
  overDueBalance?: any;
  totalRevenue?: any;
  totalExpense?: any;
  preferredDeliveryMethod: string;
  resaleNum?: any;
  jobInfo?: any;
  customerEx?: any;
  secondaryTaxIdentifier?: any;
  primaryTaxIdentifier?: any;
  taxExemptionReasonId?: any;
  isProject?: any;
  ccdetail?: any;
  tdsenabled?: any;
  araccountRef?: any;
}


export interface Stop {
  id?: number;
  priority: number;
  client: number;
  name: string;
  address: string;
}

export interface Route {
  id?: number;
  user?: number;
  name?: string;
  stops?: Stop[];
}

export interface Dashboard{
  clientsCount?: number;
  invoicesCount?: number;
  paymentNumber?: number;
  lastedOrders?: Invoice[];
  lastedPayments?: Payment[];
  lastedClients?: Customer[];
}
