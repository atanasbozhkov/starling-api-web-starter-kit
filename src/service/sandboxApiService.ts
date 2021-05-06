import axios, { AxiosPromise } from 'axios';
import querystring from 'querystring';
import { Balance, Customer, Transaction } from "../types/types";

export const getTransactions = (from: string, to: string): AxiosPromise<Array<Transaction>> => {
  return axios({
    method: 'get',
    url: `/api/sandbox/transactions?${querystring.stringify({ from, to })}`
  });
};

export const getBalance = (): AxiosPromise<Balance> => {
  return axios.get(`/api/sandbox/balance`);
};

export const getCustomer = (): AxiosPromise<Customer> => {
  return axios.get(`/api/sandbox/customer`);
};
