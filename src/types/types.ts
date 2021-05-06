export interface Transaction {
  categoryUid: string;
  counterPartyName: string;
  counterPartySubEntityUid: string;
  counterPartyType: string; // Maybe enum this? MERCHANT
  counterPartyUid: string;
  country: string;
  direction: string; // ENUM IN/OUT
  feedItemUid: string;
  hasAttachment: boolean;
  hasReceipt: boolean;
  reference: string;
  source: string;
  sourceAmount: Amount;
  sourceSubType: string;
  spendingCategory: string;
  status: string;
  transactingApplicationUserUid: string;
  transactionTime: string; //DateTime
  updatedAt: string //DateTime
}

export interface Amount {
  currency: string;
  minorUnits: number;
}

export interface Balance {
  acceptedOverdraft: Amount;
  amount: Amount;
  clearedBalance: Amount;
  effectiveBalance: Amount;
  pendingTransactions: Amount;

}

export interface Customer {
  dateOfBirth: string; //DD-MM-YYYY;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  title: string;
}
