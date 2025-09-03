//  // Select element by ID and modify innerHTML
//  let dom = document.getElementById('heading1');
//  // Consoling its parent element or node.
//  // what is the difference between parentElement and  parentNode.
//  console.log(dom.parentNode.parentElement);
//  dom.setAttribute('class','head');
//  dom.setAttribute('class','header');
//  dom.removeAttribute('class');
//  //dom.remove();
//  //This is  a way of creating and removing the attributes on the nodes.
//  dom.innerHTML = "It can be manipulated.";
//  console.log(dom.childNodes)
//  console.log(dom);

//  // Select elements by class name and style them
//  let dom1 = document.getElementsByClassName('heading2');
// while(dom1.length > 0) {
//     dom1[0].remove();
// }
//  console.log(dom1);

//  for (let i = 0; i < dom1.length; i++) { // Corrected loop condition
//    dom1[i].style.color = 'blue';
//    dom1[i].style.fontSize = '24px'; // Font size needs to be in pixels, ems, etc.
//  }

//  // Use querySelector to select the first matching element and style it
//  let dom2 = document.querySelector('p');
//  console.log(dom2);
//  dom2.style.color = 'pink';
//  // How to create other nodes.
//  // The difference between textContent,innerHTML and innerText.
//  let body = document.querySelector('body');
//  let division = document.createElement('div');
//  body.append(division);
//  for(i=0;i<=5;i++) {
//  let ul = document.createElement('ul');
//  division.append(ul);
//  }
//  console.log(dom.innerText);
//  console.log(dom.textContent);
//  console.log(dom.innerHTML);
//  console.log(dom.firstChild);
//  console.log(dom.lastChild);
// //  for(i=0;i<=4;i++) {
// //  let creation = ul.setAttribute('class','headings');
// //  }
//  // innerText simply shows the content in a node without showing other properties like indention
//  // Text content just adds on to show the indention
//  // innerHTML show all the indention and which html tag to which that content belongs to.
//  // remove method is used to remove one or more elements in our dom

