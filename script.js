// Bank Management Demo Script
// Note: This is only front-end simulation (no backend integration)

// Handle tab navigation
const tabs = document.querySelectorAll(".tabs a");
const panels = document.querySelectorAll("section > div.panel");

function showPanel(id) {
  panels.forEach(panel => {
    if (panel.id === id) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });

  tabs.forEach(tab => {
    if (tab.getAttribute("href") === `#${id}`) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

// Set initial active panel
showPanel("accounts");

// Attach events
for (let tab of tabs) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    showPanel(targetId);
  });
}

// Simple alert for form submissions
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("This is a demo — no real transaction or account creation.");
  });
});
