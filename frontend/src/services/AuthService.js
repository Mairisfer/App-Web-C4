import { API_URL } from "./api";

export async function login(username, password) {
  const res = await fetch(API_URL +"/api/login", {
    headers: {
      username: username,
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

export async function register(username, password) {
  const data = {
    user: {
      username: username,
      password: password,
    },
  };

  const res = await fetch(API_URL+"/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const document = await res.json();
    return document;
  } else {
    return null;
  }
}
