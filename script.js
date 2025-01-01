document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav_item");
  const subNavLists = document.querySelectorAll(".sub_nav_list");
  const navigation = document.querySelector(".navigation");

  // Function to close all sub-nav lists
  const closeAllSubNavLists = () => {
    subNavLists.forEach((subNav) => {
      subNav.style.display = "none";
      
    });
  };

  // Add event listeners to each nav item
  navItems.forEach((item) => {
    const subNav = item.querySelector(".sub_nav_list");
    if (subNav) {
      // Open the sub-nav on click or hover
      item.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent triggering the outside click
        closeAllSubNavLists(); // Close other open sub-navs
        subNav.style.display = "block";
      });

      // Optional: Open on hover (remove this block if hover is not needed)
      item.addEventListener("mouseenter", () => {
        closeAllSubNavLists(); // Close other open sub-navs
        subNav.style.display = "block";
      });
      // Optional: Open on hover (remove this block if hover is not needed)
      item.addEventListener("mouseleave", () => {
         subNav.style.display = "none";
      });
    }
  });

  // Close sub-nav if clicking outside the navigation
  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target)) {
      closeAllSubNavLists();
    }
  });
});
