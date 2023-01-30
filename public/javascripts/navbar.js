var projects, timeline, contact;
projects = document.createElement("p");
projects.innerHTML = lang == "en" ? "Projects" : "Projets";
projects.classList.add("navItem");
projects.addEventListener("click", function () {
  window.location.href = "/projects";
});

timeline = document.createElement("p");
timeline.innerHTML = "Experience";
timeline.classList.add("navItem");
timeline.addEventListener("click", function () {
  window.location.href = "/timeline";
});

contact = document.createElement("p");
contact.innerHTML = "Contact";
contact.classList.add("navItem");
contact.addEventListener("click", function () {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

var curentPage = window.location.pathname.split("/")[1];
window[curentPage].classList.add("active");

var nav = document.createElement("div");
nav.id = "nav-content";
nav.appendChild(projects);
nav.appendChild(timeline);
nav.appendChild(contact);
document.querySelector(".navFix").appendChild(nav);
