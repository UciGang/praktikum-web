let kertas = document.querySelector("#kertas");
let gunting = document.querySelector("#gunting");
let batu = document.querySelector("#batu");
let computerChoice = document.querySelector("#computerChoice");

//function logic komputer
const pilihanKomputer = () => { //arrow function
const options = ["kertas", "gunting", "batu"];
const result = options[Math.floor(Math.random() * 3)];

return result;
}

//kertas
kertas.addEventListener('click',() => {
    let pilihan = pilihanKomputer();
    computerChoice.innerHTML = pilihan;

    setTimeout(() => {
        switch (pilihan) {
            case "kertas":
                alert("Draw!");
                break;

            case "gunting":
                alert("Computer Win!");
                break;

            default:
                alert("You Win!");
                break;
        }
    }, 100);
});

//gunting
gunting.addEventListener('click',() => {
    let pilihan = pilihanKomputer();
    computerChoice.innerHTML = pilihan;

    setTimeout(() => {
        switch (pilihan) {
            case "kertas":
                alert("You Win!");
                break;

            case "gunting":
                alert("Draw!");
                break;

            default:
                alert("Computer Win!");
                break;
        }
    }, 100);
});

//batu
batu.addEventListener('click',() => {
    let pilihan = pilihanKomputer();
    computerChoice.innerHTML = pilihan;

    setTimeout(() => {
        switch (pilihan) {
            case "kertas":
                alert("Computer Win!");
                break;

            case "gunting":
                alert("You Win!");
                break;

            default:
                alert("Draw!");
                break;
        }
    }, 100);
});