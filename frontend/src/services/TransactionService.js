import { API_URL } from "./api";

export async function getTransactions(token) {
  const res = await fetch(API_URL + "/api/reservations", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}
