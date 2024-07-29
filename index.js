
// let inputIn = document.querySelector(".input_in");
// let subBtn = document.querySelector("subBtn");

// let costOfGoods = +inputIn.value;
// let salesComission = +inputIn.value;




let bn = document.querySelector("form");

bn.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(bn);

    const res = Object.fromEntries(fd);

    console.log(res);


})

