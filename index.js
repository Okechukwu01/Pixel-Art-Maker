let toggle = document.getElementById('toggle');
let body = document.body;
let container = document.getElementById("container");
let height = document.getElementById("height");
let hvalue = document.getElementById("hvalue");
let width = document.getElementById("width");
let wvalue = document.getElementById("wvalue");
let create = document.getElementById("create");
let clear = document.getElementById("clear");
let color = document.getElementById("color");
let paint = document.getElementById("paint");
let erase = document.getElementById("erase");
let canvas = document.getElementById("canvas");
let form = document.getElementById("form");
let pnt = '';
let ers = '';
let crt = '';

toggle.addEventListener('input', function (e){
    let check = e.target.checked;
    if (check) {
        body.classList.add('light');
    } else {
        body.classList.remove('light');
    }
})

paint.addEventListener('click', function (event){
    event.preventDefault();
    pnt = true;
    ers = false;
    console.log(`paint is = ${pnt} and erase is = ${ers}`)
})

erase.addEventListener('click', function (event){
    event.preventDefault();
    pnt = false;
    ers = true;
    console.log(`paint is = ${pnt} and erase is = ${ers}`)
})

create.addEventListener('click', function createOption(event) {
    event.preventDefault();
    crt = true;
   canvas.innerHTML = null;
   for (let i = 0; i < height.value; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j < width.value; j++) {
        let cell = row.insertCell(j);
        cell.setAttribute("id", `col${j}`);
        cell.addEventListener('click', function (event) {
            if (pnt === true) {
                cell.style.backgroundColor = color.value;
            }
            if (ers === true) {
                cell.style.backgroundColor = '';
            }
        })
    }
   }
});

clear.addEventListener('click', function clearCanvas(event) {
    if (crt === true) {
        event.preventDefault();
        canvas.innerHTML = null;
        for (let i = 0; i < height.value; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width.value; j++) {
            let cell = row.insertCell(j);
            cell.setAttribute("id", `col${j}`);
            cell.addEventListener('click', function (event) {
                if (pnt === true) {
                    cell.style.backgroundColor = color.value;
                }
                if (ers === true) {
                    cell.style.backgroundColor = '';
                }
            })
        }
        }
    }
});

height.addEventListener("input", function () {
    hvalue.innerHTML = height.value <= 9 ? `0${height.value}` 
    : height.value;
});

width.addEventListener("input", function () {
    wvalue.innerHTML = width.value <= 9 ? `0${width.value}` 
    : width.value;
});