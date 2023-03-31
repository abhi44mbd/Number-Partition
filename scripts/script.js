const splitBtn = document.getElementById("splitBtn");
splitBtn.addEventListener("click", split);


function split() {
    const number = document.getElementById("number").value;
    const splits = document.getElementById("splits").value;
    const container = document.getElementById("container");

    container.innerHTML = "";
    document.getElementById("error").innerHTML = "";
    if (!Number.isInteger(Number(number)) || !Number.isInteger(Number(splits))) {
        document.getElementById("error").innerHTML = "Error: " + "Enter only integer value.";
        return;
    }
    let num = parseInt(number);
    let parts = parseInt(splits);
    if (parts > num) {
        document.getElementById("error").innerHTML = "Error: " + "Splits should not be grater than Number";
        return;
    }
    if (splits <= 0) {
        document.getElementById("error").innerHTML = "Error: " + "Splits should be a positive Number";
        return;
    }


    let remaining = number;
    for (let i = 0; i < splits; i++) {
        const amount = Math.ceil(remaining / (splits - i));
        const div = document.createElement("div");
        div.classList.add("split");
        div.style.backgroundColor = getRandomColor();
        div.style.flex = amount;
        div.innerHTML = amount;
        container.appendChild(div);
        remaining -= amount;
    }


}



function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)
        ];
    }
    return color;
}
