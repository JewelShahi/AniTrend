document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");

  searchInput.addEventListener("input", function () {
    filterFunction(true);
  });

  searchButton.addEventListener("click", function () {
    filterFunction(false);
  });
});

function adjustContainerHeight() {
  const container = document.getElementById("data-set");
  const visibleLinks = Array.from(container.querySelectorAll(".data a")).filter(link => link.style.display !== "none");
  const combinedHeight = visibleLinks.reduce((totalHeight, link) => totalHeight + link.offsetHeight, 0);

  container.style.height = `${Math.min(combinedHeight, 450)}px`;
}

function filterFunction(showAll) {
  let input, filter, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  const links = document.querySelectorAll(".data a");
  const visibleLinks = [];

  links.forEach((link) => {
    txtValue = link.textContent || link.innerText;
    if (
      showAll ||
      filter === "" ||
      txtValue.toUpperCase().indexOf(filter) > -1
    ) {
      link.style.display = "";
      visibleLinks.push(link);
    } else {
      link.style.display = "none";
    }
  });

  applyStylesToLinks(visibleLinks);
  adjustContainerHeight();
}

function applyStylesToLinks(links) {
  const numVisibleLinks = links.length;

  links.forEach((link, index) => {
    // Reset styles
    link.style.borderRadius = "";
    link.style.backgroundColor = "";

    if (numVisibleLinks === 1) {
      // Apply rounded corners to all sides if there is only one visible link
      link.style.borderRadius = "10px";
    } else {
      // Apply styles for first and last child
      if (index === 0) {
        // First child
        link.style.borderRadius = "10px 10px 0 0";
      } else if (index === numVisibleLinks - 1) {
        // Last child
        link.style.borderRadius = "0 0 10px 10px";
      }

      // Alternating background colors
      if (index % 2 === 0) {
        link.style.backgroundColor = "rgb(59, 59, 59)";
      } else {
        link.style.backgroundColor = "rgb(99, 99, 99)";
      }
    }
  });
}