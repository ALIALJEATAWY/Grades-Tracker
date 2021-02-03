'use strict';


// 



// As a user, I would like to be able to add students grades in specific courses so I can track the grades.
// - Create a form in order to add the student name and course. 
// The course should be one of a predefined list that contains the following courses: 
// Arabic, English, Math, Science, Art

// - Whenever you add a new student, you should generate the student's grade as an integer random number between 0 and 100.

// As a user, I would like to view all of my students that I already added so that I can quickly view their grades.
// - Whenever you add a student using the form, you should use the local storage in order to get all the students from it and render them as a table using DOM.

// - *Stretch goal*
// Add a clear button under the table, that when clicked will clear the table and the local storage

// - *Stretch goal*
// Add a fourth column to the table and fill it with "Fail" if the grade in that row is less than 50, and "Pass" otherwise 




function grades (studentname , coursename ){

this.studentname = studentname;
this.coursename = coursename;

this.grades = generaterandomnumber();



}

grades.prototype.allgrades = [];





var form = document.getElementById('gradesStudent');
  form.addEventListener('submit', addGrades );

console.log('addGrades');

function addGrades(event){


    var valuename = event.target.studentname.value;
    var valuecorse = event.target.coursename.value;

    localStorage.setItem('grades1', JSON.stringify(grades1));

    var newstudent = new grades (valuename , valuecorse);
}

function generaterandomnumber(){

    return Math.floor(Math.random() * (100 - 0) ) + 0;
}





var table = document.getElementById('createtable');




function createtables(){
    

    
    
    var headerrow = document.createElement('tr');
    table.append('headerrow');


    var studentname = document.createElement('th');
    studentname.document.textcontant('studentname');
    (headerrow).appendchild('studentname');


    var coursename = document.createElement('th');
    coursename.document.textcontant('coursename');
    (headerrow).appendchild('coursename');


    var grades = document.createElement('th');
    grades.document.textcontant('grades');
    (headerrow).appendchild('grades');




}
createtables();



function render(){



    var headerrow = document.createElement('tr');
    table.append('headerrow');


    var valuename = document.createElement('td')
    valuename.document.textcontant = this.studentname;
    (headerrow).appendchild('valuename');


    var coursename = document.createElement('td');
    coursename.document.textcontant = this.coursename;
    (headerrow).appendchild('coursename');


    var grades = document.createElement('td');
    grades.document.textcontant = this.grades;
    (headerrow).appendchild('grades');






x.render();




}

















