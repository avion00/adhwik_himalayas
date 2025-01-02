document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav_item");
  const subNavLists = document.querySelectorAll(".sub_nav_list");
  const navigation = document.querySelector(".navigation");
  const navbarSection = document.querySelector(
    ".list_navbar_section_for_mobile"
  );
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");

  let activeSubNav = null; // Track the currently active sub-nav

  // Function to close all sub-nav lists
  const closeAllSubNavLists = () => {
    subNavLists.forEach((subNav) => {
      subNav.classList.remove("active");
    });
    activeSubNav = null; // Reset the active sub-nav
  };

  // Function to open the navbar section with overlay
  const openNavbar = () => {
    navbarSection.classList.add("active"); // Show navbar
    overlay.classList.add("active"); // Show overlay
  };

  // Function to close the navbar section and remove overlay
  const closeNavbar = () => {
    navbarSection.classList.remove("active"); // Hide navbar
    overlay.classList.remove("active"); // Hide overlay
  };

  // Navbar item interactions
  navItems.forEach((item) => {
    const subNav = item.querySelector(".sub_nav_list");
    if (subNav) {
      // Hover behavior
      item.addEventListener("mouseenter", () => {
        if (!activeSubNav) {
          subNav.classList.add("active");
        }
      });

      item.addEventListener("mouseleave", () => {
        if (!activeSubNav) {
          subNav.classList.remove("active");
        }
      });

      // Click behavior for nav item
      item.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent triggering the outside click handler
        const isActive = activeSubNav === subNav;

        if (!isActive) {
          closeAllSubNavLists(); // Close other sub-navs
          subNav.classList.add("active");
          activeSubNav = subNav; // Set this as the active sub-nav
        } else {
          subNav.classList.remove("active");
          activeSubNav = null; // Clear the active sub-nav
        }

        // Toggle the navbar section and overlay when clicking on the menu
        if (!navbarSection.classList.contains("active")) {
          openNavbar();
        }
      });
    }
  });

  // Prevent hiding the sub-nav when clicking inside it
  subNavLists.forEach((subNav) => {
    subNav.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent triggering the outside click handler
    });
  });

  // Close the active sub-nav when clicking outside the navigation
  document.addEventListener("click", (event) => {
    if (
      !navigation.contains(event.target) &&
      !navbarSection.contains(event.target)
    ) {
      closeAllSubNavLists();
      closeNavbar(); // Close navbar and hide the overlay
    }
  });

  // Menu button toggle for the navbar and overlay
  menu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent triggering the document click event
    if (!navbarSection.classList.contains("active")) {
      openNavbar();
    } else {
      closeNavbar();
    }
  });

  // Close navbar when clicking on the overlay (optional)
  overlay.addEventListener("click", () => {
    closeNavbar(); // Hide navbar and overlay when clicking on the overlay
  });
});
