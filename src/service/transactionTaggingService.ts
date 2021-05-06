import axios from "axios";

export interface Transaction {
  transactionUid: string;
}

export const addTransactionTag = (transaction: Transaction, tag: string) => {
  return axios(`/api/my/transaction-tags/${transaction.transactionUid}/tags`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { transaction, tag },
  }).then(() => console.log("Done tagging"));
};

export const removeTransactionTag = (transaction: Transaction, tag: string) => {
  return axios(
    `/api/my/transaction-tags/${transaction.transactionUid}/tags/${tag}`,
    {
      method: "DELETE",
      headers: { Accept: "application/json" },
    }
  ).then(() => console.log("Done removing"));
};

// TODO - support date range
export const getTransactionsTags = () =>
  axios("/api/my/transaction-tags").then((response) => response.data);
export const getTransactionTags = (transaction: Transaction) => {
  return axios(
    `/api/my/transaction-tags/${transaction.transactionUid}/tags`
  ).then((response) => response.data);
};
export const getTags = () =>
  axios("/api/my/tags").then((response) => response.data);
export const getTagsLike = (tag: string) =>
  axios(`/api/my/tag-suggestions/${tag}`).then((response) => response.data);
