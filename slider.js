"use strict";

const Ant = function () {
  let id = document.getElementById();
  if (id) {
    this.crslRoot = id;
  } else {
    this.crslRoot = document.querySelector(".ant-carousel");
  }

  this.crslList = document.querySelector(".ant-carousel-list");
  this.crslElements = document.querySelectorAll(".ant-carousel-element");
  this.crslElemFirst = document.querySelector(".ant-carousel-element");
  this.leftArrow = document.querySelector("div.ant-carousel-arrow-left");
  this.rightArrow = document.querySelector("div.ant-carousel-arrow-right");
  this.indicatorDots = document.querySelector(".ant-carousel-dots");

  this.options = Ant.default;
  Ant.initialize(this);
};

Ant.default = {
  elemVisible: 1,
  loop: true,
  auto: true,
  interval: 6000,
  speed: 750,
  touch: true,
  arrows: true,
  dots: true,
};

Ant.prototype.elemPrev = function (num) {
  num = num || 1;
  if (this.options.dots) this.dotOn(this.currentElement);
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.dotsVisible - 1;
  if (this.options.dots) this.dotOff(this.currentElement);

  if (!this.options.loop) {
    this.currentOffset += this.elemWidth * num;
    this.crslList.style.marginLeft = this.currentOffset + "px";
    if (this.currentElement == 0) {
      this.leftArrow.style.display = "none";
      this.touchPrev = false;
    }
    this.rightArrow.style.display = "block";
    this.touchNext = true;
  } else {
    let elm, buff, this$ = this;
    for (let i = 0; i < num; i++) {
      elm = this.crslList.lastElementChild;
      buff = elm.cloneNode(true);
      this.crslList.insertBefore(buff, this.crslList.firstElementChild);
      elm.remove;
    }
    this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";
    let compStyle = window.getComputedStyle(this.crslList).marginLeft;
    this.crslList.style.cssText = 
      "transition:margin" + this.options.speed + "ms ease;";
    this.crslList.style.marginLeft = "0px";
    setTimeout(function () {
      this$.crslList.firstElementChild;
    }
  }
};
