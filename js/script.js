/******************************************
 * Aaron Jorgensen
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//global variables
var studentsPerPage = 10;
var studentListUl = document.querySelectorAll(".student-list")[0];
var studentListLi = studentListUl.children;

// define showing or hiding students
function showPage (list, page) {
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


// dynamically create pages and append list to them
function appendPageLinks (list) {
    // find the total number of students
    const numberOfStudents = studentListLi.length;
    // divide number of found students by number of defined students per page set in global var
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

// call the functions to initiate them
appendPageLinks();
showPage(studentListLi, 0);