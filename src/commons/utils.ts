export enum currencySymbols {
  GBP = '£',
  USD = '$',
  EUR = '€'
}

export enum iconClasses {
  MASTER_CARD = 'credit card',
  FASTER_PAYMENTS_OUT = 'sign out',
  FASTER_PAYMENTS_IN = 'sign in',
  STARLING_PAY_STRIPE = 'money bill alternate outline',
  STRIPE_FUNDING = 'plus',
  INTERNAL_TRANSFER = 'exchange',
  INTEREST_PAYMENT = 'percent',
  DIRECT_DEBIT = 'building',
  DIRECT_CREDIT = 'building'
}

export enum sourceDisplay {
  MASTER_CARD = 'Card',
  FASTER_PAYMENTS_OUT = 'Outbound Payment',
  FASTER_PAYMENTS_IN = 'Inbound Payment',
  STARLING_PAY_STRIPE = 'Settle Up',
  STRIPE_FUNDING = 'Account Funded',
  INTERNAL_TRANSFER = 'Internal Transfer',
  INTEREST_PAYMENT = 'Interest',
  DIRECT_DEBIT = 'Direct Debit',
  DIRECT_CREDIT = 'Direct Credit',
  CHEQUE = 'Cheque Deposit',
  CICS_CHEQUE = 'Cheque Deposit'
}

export const lookup = (key: string) => {
  return {
    in: (map: Record<string, string>) => {
      return {
        orDefault: (value: string) => {
          return map[key] || value;
        }
      };
    }
  };
};

export const amountDisplay = ({ minorUnits, currency }: { minorUnits: number, currency: string}) => {
  const currencySymbol = lookup(currency).in(currencySymbols).orDefault('£');
  if (minorUnits < 0) {
    return '-' + currencySymbol + (-minorUnits/100).toFixed(2).toString();
  } else {
    return currencySymbol + (minorUnits/100).toFixed(2).toString();
  }
};

import _ from 'lodash';

interface Classes {
  classes?: Array<string>;
}

export const joinClasses = ({classes}: Classes) => {
  const nonBlank = _.filter(classes, (clazz) => !!clazz);
  return _.join(nonBlank, ' ');
};

// export const defaultTo = (fn, def) => (a, b, c, d, e, f, g) => fn(a, b, c, d, e, f, g) || def;
