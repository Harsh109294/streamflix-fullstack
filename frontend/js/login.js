async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!email || !password){
    alert("Please fill all fields");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/login", {
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

  if(data.message === "User not found"){
    alert("Invalid Email");
    return;
  }

  if(data.message === "Wrong Password"){
    alert("Incorrect Password");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.user._id);

  window.location.href = "index.html";
}