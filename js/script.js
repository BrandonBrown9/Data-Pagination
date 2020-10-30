/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = page * 9 - 9; // how many list items will be displayed
   const endIndex = page * 9;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = ''; // clears any items that may have shown

   //Looping through a template literal that will get inserted into the student list
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let showStudents = `
         <li class = "student-item cf">
            <div class = "student-details">
               <img class = "avatar" src = "${list[i].picture.thumbnail}" alt = "Profile Picture">
               <h3> ${list[i].name.first} ${list[i].name.last}</h3>
               <span class = "email"> ${list[i].email}</span>
            </div>
            <div class = "joined-details">
               <span class = "date"> ${list[i].registered.date}</span>
            </div>
         </li>
         `;
         studentList.insertAdjacentHTML("beforeend", showStudents);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// A function that will calculate the number of page buttons needed
function addPagination(list) {
   const numOfPages = Math.ceil(list.length/ 9);
   const linkList = document.querySelector('.link-list');

   linkList.innerHTML = '';

   for (let i = 1; i <= numOfPages; i+= 1) {
      linkList.insertAdjacentHTML ("beforeend",
      `
         <li>
            <button type="button">${[i]}</button>
         </li>
      `);
      linkList.firstElementChild.firstElementChild.classList.add('active');

      // adding event listener for the pagination buttons
      linkList.addEventListener('click', (event) => {
         let clicked = event.target; 
         if (clicked.tagName == 'BUTTON') {
            let active = document.querySelector('.active');
            active.className = ''; // sets the class as empty
            clicked.className = 'active'; // the clicked target now has the active class
            showPage(list, clicked.textContent);
         }
      })
   }
}



// Call functions
showPage(data, 1);
addPagination(data);