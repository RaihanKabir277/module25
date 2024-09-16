// where to add
const placeList = document.getElementById('places-list');
// what to be added
const li = document.createElement('li');
li.innerText = 'Pahartolibon';

// add the child

placeList.appendChild(li);


const mainContent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'burhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'kichuri';
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section);

// set inner HTML directly-------

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My dress Section </h1>
<ul>
<li>T-shirt</li>
<li>shirt</li>
<li>Pant</li>
</ul>
`
mainContent.appendChild(sectionDress);