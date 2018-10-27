/**************************
Filename: namespace.js
Author: Thomas Sicard
Date: 10/26/2018
Description: namespace assignment
***************************/

var SICA0019 = {
    init: function (){
        let awesomeDiv = document.createElement("div");
        awesomeDiv.className = "box";
        awesomeDiv.textContent = "sica0019";
        let a = document.querySelector("#boxes");
        a.appendChild(awesomeDiv);
        
        
        awesomeDiv.addEventListener("mouseover", () => {
            awesomeDiv.classList.toggle("highlight");
      
        });
        awesomeDiv.addEventListener("click", () => {
            awesomeDiv.style.backgroundColor = "red";
            awesomeDiv.style.color = "orange";
            awesomeDiv.style.borderBottomColor = "blue";
            awesomeDiv.style.borderTopColor = "green";
            awesomeDiv.style.borderLeftColor = "purple";
            awesomeDiv.style.borderRightColor = "yellow";
        });
        awesomeDiv.addEventListener("mouseout", () => {
            awesomeDiv.classList.toggle("highlight");
            awesomeDiv.removeAttribute("style");
        });
        
    }
}