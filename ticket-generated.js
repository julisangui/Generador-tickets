document.querySelector(".email").innerText = localStorage.getItem("email");
document.querySelector(".github").innerText = ("@" + localStorage.getItem("github"));

const nameElements = document.querySelectorAll(".name"); 
const allNames = localStorage.getItem("name");

nameElements.forEach(names => {
    names.innerText = allNames; 
});

let date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
document.querySelector(".date-and-location").innerText = date + " / CABA";

const avatarSrc = localStorage.getItem("avatar");
if (avatarSrc) {
    document.querySelector(".avatar-img").src = avatarSrc;
}