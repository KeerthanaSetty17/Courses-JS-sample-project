const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete AngularJS course",
        price: "3.0"
    },
    {
        name: "Complete MERN course",
        price: "2.7"
    },
    {
        name: "Complete CSS course",
        price: "1.3"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( (course) => {

    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
    });
}

//generateList();

window.addEventListener("load", generateList);

const buttonAsc = document.querySelector(".sort-btn");

buttonAsc.addEventListener("click", () => {
    courses.sort((a,b) => (a.price - b.price));
    generateList();
});

const buttonDesc = document.querySelector(".btn-primary");

buttonDesc.addEventListener("click", () => {
    courses.sort((a,b) => (b.price - a.price));
    generateList();
})