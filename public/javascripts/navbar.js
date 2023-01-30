var projects, timeline, contact;
projects = document.createElement("p");
projects.innerHTML = lang == "en" ? "Projects" : "Projets";
projects.classList.add("navItem");
projects.addEventListener("mousedown", function (e) {
  e.preventDefault();
  console.log(e);
  if (e.which == 1) window.location.href = "/projects";
  else window.open("/projects", "_blank");
});

timeline = document.createElement("p");
timeline.innerHTML = "Experience";
timeline.classList.add("navItem");
timeline.addEventListener("mousedown", function (e) {
  e.preventDefault();
  console.log(e);
  if (e.which == 1) window.location.href = "/timeline";
  else window.open("/timeline", "_blank");
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
