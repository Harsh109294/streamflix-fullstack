async function signup() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!name || !email || !password){
    alert("Please fill all fields");
    return;
  }

  if(password.length < 6){
    alert("Password must be at least 6 characters");
    return;
  }

  const res = await fetch("https://streamflix-fullstack.onrender.com/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  const data = await res.json();

  alert(data.message);

  window.location.href = "login.html";
}