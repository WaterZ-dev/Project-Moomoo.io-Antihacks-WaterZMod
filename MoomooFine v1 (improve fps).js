// ==UserScript==
// @name         Moomoofine
// @author       WaterZ
// @version      1
// @description  this mod takes out some things that will help ease up on the fps!
// @match                 *://moomoo.io/*
// @match                 *://sandbox.moomoo.io/*
// @match                 *://dev.moomoo.io/*
// @grant        none
// ==/UserScript==

var areplacer = document.getElementsByClassName("areplacer");
var count = areplacer.length;
var i;

for(i = 0;i < count;i++)
{
    areplacer[0].parentNode.removeChild(areplacer[0]);
}
