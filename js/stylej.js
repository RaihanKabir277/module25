const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const container = document.getElementById('places-container');
// container.style.backgroundColor = 'green';

const container = document.getElementById('places-container');
container.classList.add('yellow-bg');
container.classList.remove('large-text');
