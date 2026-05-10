async function login() {
  const res = await fetch("https://streamflix-fullstack.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();

  if (res.ok) {
    window.location.href = "/dashboard.html";
  } else {
    alert("Login failed");
  }
}