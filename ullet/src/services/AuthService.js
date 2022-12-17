export async function login(username, password) {
  const res = await fetch("http://localhost:8089/api/login/", {
    headers: {
      user: username,
      password: password,
    },
  });

  if (res.ok) {
    const document = await res.json();
    return document.token;
  } else {
    console.log("No autorizado");
    return null;
  }
}
