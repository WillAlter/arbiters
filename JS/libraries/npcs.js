// function sortList() {
//     //Get all sections with filterable characters
//     const sections = document.querySelectorAll('.npc-wrapper');

//     sections.forEach( section => {
//         //Get a list of all list items
//         const items = section.querySelectorAll(".npc-section");

//         //Get the filter select input and add listener for the change event
//         const select = section.querySelector("select");
//         select.addEventListener("change", sort);

//         function sort() {
//             items.forEach(element => {
//                 if (element.dataset.tags.includes(select.value) | select.value == "All") {
//                     element.removeAttribute("hidden");
//                 } else { element.setAttribute("hidden", true); }
//             });
//         };

//         sort();

//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//   sortList();
// });

function sortList() {
  const sections = document.querySelectorAll('.npc-wrapper');

  sections.forEach(section => {
    const items = section.querySelectorAll(".npc-section");
    const selects = section.querySelectorAll("select");

    // Listen to ALL selects
    selects.forEach(select => {
      select.addEventListener("change", sort);
    });

    function sort() {
      items.forEach(item => {
        const tags = item.dataset.tags.toLowerCase();

        let shouldShow = true;

        selects.forEach(select => {
          const value = select.value.toLowerCase();

          // Ignore empty ("All")
          if (value && !tags.includes(value)) {
            shouldShow = false;
          }
        });

        if (shouldShow) {
          item.removeAttribute("hidden");
        } else {
          item.setAttribute("hidden", true);
        }
      });
    }

    sort(); // initial run
  });
}

document.addEventListener("DOMContentLoaded", sortList);
