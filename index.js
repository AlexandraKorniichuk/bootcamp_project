"use strict";

let crlsRoot = document.querySelector(".ant-carousel");
console.log(crlsRoot);

let crlsList = document.querySelector(".ant-carousel-list");
console.log(crlsList);

let crlsElements = document.querySelectorAll(".ant-carousel-element");
console.log(crlsElements);

let crlsElemFirst = document.querySelector(".ant-carousel-element");
console.log(crlsElemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector(".ant-carousel-dots");
console.log(indicatorDots);

let elm;
elm = crlsList.lastElementChild;
console.log("последний елемент списка", elm);

let buf;
buf = elm.cloneNode(true);
console.log("ключ последнего елемента списка", buf);

crlsList.insertBefore(buf, crlsList.firstElementChild);

// crlsList.removeChild(elm);
elm.remove

console.log(crlsList);

leftArrow.addEventListener("click", leftArrowClick);
rightArrow.addEventListener("click", rightArrowClick);

function leftArrowClick() {
    alert("Сработал клик на левую стрелку");
}

function rightArrowClick() {
    alert("Сработал клик на правую стрелку");
}
