const dataDetails = document.querySelectorAll(".data");

dataDetails.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      item.previousElementSibling.style.visibility = "collapse";
    } else {
      item.previousElementSibling.style.visibility = null;
    }
  });
});