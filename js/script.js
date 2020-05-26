/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
var page = document.querySelector(".page");
var pageHeader = document.querySelector(".page-header");
var student = document.querySelectorAll(".student-item");
var studentsPerPage = 10;
var studentListUl = document.querySelectorAll(".student-list")[0];
var studentListLi = studentListUl.children;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
    const min = page * studentsPerPage;
    const max = (page + 1) * studentsPerPage;
    for (let i = 0; i < list.length; ++i) {
        if (i >= min && i < max) {
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
    }
}




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => {
    const numberOfStudents = studentListLi.length;
    const amountOfPages = Math.ceil(numberOfStudents / studentsPerPage);
    const newDiv = document.createElement("div");
    newDiv.className = "pagination";
    const mainPage = document.querySelectorAll(".page")[0];
    mainPage.appendChild(newDiv);
    const newDivUl = document.createElement("ul");
    newDiv.appendChild(newDivUl);
    const anchorList = document.getElementsByTagName("a");
    for (let i = 0; i < amountOfPages; ++i) {
        const newDivLi = document.createElement("li");
        const anchor = document.createElement("a");
        newDivUl.appendChild(newDivLi);
        anchor.href = "#";
        anchor.textContent = i + 1;
        newDivLi.appendChild(anchor);
        anchor.addEventListener("click", (e) => {
            for (let i = 0; i < anchorList.length; i++) {
                anchorList[i].className = "";
                e.target.className = "active";
            }
            showPage(studentListLi, i);
        });
    }
    anchorList[0].className = "active";


}
appendPageLinks();
showPage(studentListLi, 0);




// Remember to delete the comments that came with this file, and replace them with your own code comments.