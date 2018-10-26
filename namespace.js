/**************************
Filename: namespace.js
Author: Thomas Sicard
Date: 10/26/2018
Description: namespace assignment
***************************/


var SICA0019 = {
    init: function () {
        let awesomeDiv = document.createElement("div");

        awesomeDiv.className = "box";

        awesomeDiv.textContent = "Sica0019";

        let boxes = document.getElementById("boxes");

        boxes.appendChild(awesomeDiv);


        awesomeDiv.addEventListener("mouseover", mouseOver);




    }

}

function mouseOver() {
    awesomeDiv.classList.toggle("highlight");

}
