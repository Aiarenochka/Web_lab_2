// ЗАВДАННЯ 1
function calcC(x, y) {
    return Math.abs(Math.pow(x, y / x) - Math.cbrt(y / x));
}

function calcF(x, y, z) {
    return (y - x) * ((y - z / (y - x)) / (1 + Math.pow(y - x, 2)));
}

const form1 = document.getElementById("task1Form");
const resTask1 = document.getElementById("resTask1");

form1.addEventListener('submit', function(event) {
    event.preventDefault();

    const x = parseFloat(document.getElementById("inpX").value);
    const y = parseFloat(document.getElementById("inpY").value);
    const z = parseFloat(document.getElementById("inpZ").value);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        alert("Введіть числа у всі поля!");
        return;
    }

    if (x === 0 || (y - x) === 0) {
        alert("Помилка: знаменник не може дорівнювати нулю!");
        return;
    }

    const c = calcC(x, y);
    const f = calcF(x, y, z);

    if (isNaN(c) || isNaN(f)) {
        alert("Вираз не визначений для цих значень!");
        return;
    }

    resTask1.innerHTML = "<strong>c =</strong> " + c.toFixed(5) + "<br><strong>f =</strong> " + f.toFixed(5);
});

// ЗАВДАННЯ 2
const VARIANT = 10;

const form2 = document.getElementById("task2Form");
const tbody = document.querySelector("#results-table tbody");
const resTask2 = document.getElementById("resTask2");

form2.addEventListener('submit', function(event) {
    event.preventDefault();

    const size = parseInt(document.getElementById("inpN").value);

    tbody.innerHTML = "";
    resTask2.innerHTML = "";
    resTask2.classList.add("hidden");

    if (isNaN(size) || size < 1 || size > 50) {
        alert("Кількість елементів має бути від 1 до 50!");
        return;
    }

    let p = VARIANT;
    let sumSquares = 0;

    for (let i = 0; i < size; i++) {
        const a = p - 64;

        sumSquares += Math.pow(a / 3, 2);

        const row = document.createElement("tr");

        const cellI = document.createElement("td");
        cellI.textContent = i;

        const cellP = document.createElement("td");
        cellP.textContent = p;

        const cellA = document.createElement("td");
        cellA.textContent = a;

        row.appendChild(cellI);
        row.appendChild(cellP);
        row.appendChild(cellA);

        tbody.appendChild(row);

        p = (p * 67 + 11) % 128;
    }

    const vectorModule = Math.sqrt(sumSquares);
    resTask2.classList.remove("hidden");
    resTask2.innerHTML = "<strong>Модуль вектора a/3:</strong> " + vectorModule.toFixed(5);
});