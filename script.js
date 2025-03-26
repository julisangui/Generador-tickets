let avatar = document.querySelector(".avatar");
let emailInput = document.querySelector(".email-input");
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

avatar.addEventListener("change", function () {
  let file = avatar.files[0];

  if (file.size > 512000) {
    document.querySelector(".avatar-info-icon").style.color = "hsl(7, 71%, 60%)";
    document.querySelector(".notice-avatar").innerText = "File too large. Please upload a photo under 500KB";
    document.querySelector(".notice-avatar").style.color = "hsl(7, 71%, 60%)";
    return;
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    let imageBase64 = e.target.result;
    localStorage.setItem("avatar", imageBase64);

    document.querySelector(".avatar-image").src = imageBase64;
    document.querySelector(".avatar-info-icon").style.color = "rgb(105, 225, 81)";
    document.querySelector(".notice-avatar").style.color = "rgb(105, 225, 81)";
    document.querySelector(".notice-avatar").innerText = "Image uploaded!";
    document.querySelector(".avatar-image-text").innerText = "Change image";
    document.querySelector(".avatar-image-text").style.padding = "8px";
    document.querySelector(".avatar-image-text").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    document.querySelector(".avatar-image-text").style.borderRadius = "5px";
    document.querySelector(".avatar-image-text").style.color = "aliceblue";
  };
  reader.readAsDataURL(file);
});

document.querySelector(".validation-button").addEventListener("click", function (event) {
  event.preventDefault();

  let name = document.querySelector(".full-name").value;
  let email = emailInput.value.trim();
  let githubUserName = document.querySelector(".Github-user-name").value;

  if (avatar.files.length === 0) {
    document.querySelector(".avatar-info-icon").style.color = "hsl(7, 71%, 60%)";
    document.querySelector(".notice-avatar").innerText = "No file selected";
    document.querySelector(".notice-avatar").style.color = "hsl(7, 71%, 60%)";
  }
  if (name.length === 0) {
    document.querySelector(".full-name").style.borderColor = "hsl(7, 71%, 60%)";
  } else {
    document.querySelector(".full-name").style.borderColor = "";
  }
  if (!emailPattern.test(email)) {
    document.querySelector(".email-info-icon").style.display = "block";
    document.querySelector(".notice-email").style.display = "block";
    document.querySelector(".notice-email").innerText = "Please enter a valid email address.";
    document.querySelector(".email-info-icon").style.color = "hsl(7, 71%, 60%)";
    document.querySelector(".notice-email").style.color = "hsl(7, 71%, 60%)";
    emailInput.style.borderColor = "hsl(7, 71%, 60%)";
  } else {
    document.querySelector(".email-info-icon").style.display = "none";
    document.querySelector(".notice-email").style.display = "none";
    document.querySelector(".notice-email").innerText = "";
    emailInput.style.borderColor = "";
  }
  if (githubUserName.length === 0) {
    document.querySelector(".Github-user-name").style.borderColor = "hsl(7, 71%, 60%)";
  } else {
    document.querySelector(".Github-user-name").style.borderColor = "";
  }
  if (avatar.files.length > 0 && name.length > 0 && emailPattern.test(email) && githubUserName.length > 0) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("github", githubUserName);
    window.location.href = "ticket-generated.html";
  }
});