let element = null;

/** elementos que son accesibles en el DOM mediante document. */
element = document;
element = document.all;
element = document.head;
element = document.body;
element = document.domain;
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].classList;
element = document.forms[0].action;

element = document.links;
element = document.links[0];
element = document.links[0].classList;
element = document.links[0].className;

element = document.images;
element = document.scripts;

console.log(element);