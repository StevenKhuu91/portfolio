var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var lowerCaseName = restOfName.toLowerCase();
var fixedName = upperCaseFirstChar + lowerCaseName;
alert("Hello " + fixedName);

