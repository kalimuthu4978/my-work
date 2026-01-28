let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Indian Fig', 'Jackfruit'];
const h1 = document.createElement('h1');
h1.textContent = "List of Fruits";

const ul = document.createElement('ul');
fruits.forEach(fruit =>{
    const li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
            })
document.body.append(h1, ul);
// ul.style.color = "blue";
ul.setAttribute("style", "color: green");
ul.setAttribute("class", "fruit-list");
