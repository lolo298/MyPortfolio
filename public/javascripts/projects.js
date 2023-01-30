var projects, contact;
projects = document.createElement("p");
projects.innerHTML = lang == "en" ? "Projects" : "Projets";
projects.classList.add("navItem", "active");
projects.addEventListener("click", function () {
  document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
});
contact = document.createElement("p");
contact.innerHTML = "Contact";
contact.classList.add("navItem");
contact.addEventListener("click", function () {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
});
var nav = document.createElement("div");
nav.id = "nav-content";
nav.appendChild(projects);
nav.appendChild(contact);
document.querySelector(".navFix").appendChild(nav);
