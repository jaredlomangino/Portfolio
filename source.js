const homeLink = document.getElementById("home");
const projectsLink = document.getElementById("projects");
const contactLink = document.getElementById("contact");
const selectedBar = document.getElementById("selected-bar");

const projectsContainer = document.getElementById("projects-container");
const homeContainer = document.getElementById("home-container");

function onMouseUp(e) {
  const activeArea = document.activeElement;

  if (activeArea.id == "home") {
    selectedBar.style.top = "35%";
    homeContainer.scrollIntoView();
  } else if (activeArea.id == "projects") {
    selectedBar.style.top = "50%";
    projectsContainer.scrollIntoView();
  } else if (activeArea.id == "contact") {
    selectedBar.style.top = "65%";
  }
}

homeLink.addEventListener("mouseup", onMouseUp, false);
projectsLink.addEventListener("mouseup", onMouseUp, false);
contactLink.addEventListener("mouseup", onMouseUp, false);
