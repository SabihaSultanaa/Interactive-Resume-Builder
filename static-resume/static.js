"use strict";
//cv divs
let skill = document.getElementById("skill");
let contact = document.getElementById("contact");
let about = document.getElementById("about");
let work = document.getElementById("work");
let edu = document.getElementById("edu");
//buttons
let sbtn = document.getElementById("sbtn");
let cbtn = document.getElementById("cbtn");
let abtn = document.getElementById("abtn");
let wbtn = document.getElementById("wbtn");
let ebtn = document.getElementById("ebtn");
// skills
sbtn?.addEventListener('click', () => {
    if (skill.style.display == 'block') {
        console.log("if");
        skill.style.display = 'none';
    }
    else {
        console.log("else");
        skill.style.display = 'block';
    }
});
//contact
cbtn?.addEventListener('click', () => {
    if (contact.style.display == 'block') {
        contact.style.display = 'none';
    }
    else {
        contact.style.display = 'block';
    }
});
//about
abtn?.addEventListener('click', () => {
    if (about.style.display == 'block') {
        about.style.display = 'none';
    }
    else {
        about.style.display = 'block';
    }
});
//work exp
wbtn?.addEventListener('click', () => {
    if (work.style.display == 'block') {
        work.style.display = 'none';
    }
    else {
        work.style.display = 'block';
    }
});
//education
ebtn?.addEventListener('click', () => {
    if (edu.style.display == 'block') {
        edu.style.display = 'none';
    }
    else {
        edu.style.display = 'block';
    }
});
