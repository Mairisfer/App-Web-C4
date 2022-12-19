export async function getTransactions(token) {
  const res = await fetch("http://localhost:8089/api/reservations", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}
