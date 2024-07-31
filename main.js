// 
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".form-control");
  const searchButton = document.querySelector(".search-btn");

  searchButton.addEventListener("click", function () {
    searchInput.style.width = "200px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".form-control");
  const searchButton = document.querySelector(".clear-btn");

  searchButton.addEventListener("click", function () {
    searchInput.style.width = "0";
  });
});



// side bar drop down
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown-btn");
  dropdowns.forEach(function (dropdown) {
    // Initially hide the dropdown content
    var dropdownContent = dropdown.nextElementSibling;
    dropdownContent.style.maxHeight = "0";

    dropdown.addEventListener("click", function () {
      // Close all other dropdowns
      dropdowns.forEach(function (otherDropdown) {
        var otherContent = otherDropdown.nextElementSibling;
        if (otherDropdown !== dropdown) {
          otherContent.style.maxHeight = "0";
          otherContent.classList.remove("show");
        }
      });

      // Toggle the clicked dropdown
      if (dropdownContent.style.maxHeight === "0px") {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        dropdownContent.classList.add("show");
      } else {
        dropdownContent.style.maxHeight = "0";
        dropdownContent.classList.remove("show");
      }
    });
  });
});



const slider = document.getElementById("myRange");

slider.addEventListener("input", function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background = `linear-gradient(to right, #ff5a5a ${value}%, #eee ${value}%)`;
});



// click profile dropdown

