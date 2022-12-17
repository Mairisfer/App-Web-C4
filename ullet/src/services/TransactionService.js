export async function getTransactions(token) {
  const res = await fetch("http://localhost:8089/api/transaction/", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}
