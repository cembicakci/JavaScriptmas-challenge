const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btnSrt = document.getElementById("btn-sort")
const btnAdd = document.getElementById("btn-add")
const name = document.getElementById("name");
btnSrt.addEventListener("click", sort)
btnAdd.addEventListener("click", add)

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

function sort(){
    niceList.innerHTML = "";
    naughtyList.innerHTML = "";
    let sortList = sorteesArr.map(item => {
        if(item.hasBeenGood){
            niceList.innerHTML += `<i>${item.name}</i>`;
        }else{
            naughtyList.innerHTML += `<i>${item.name}</i>`;
        }
    })
}

function add(){
    let addName = {
        name: name.value,
        hasBeenGood: nice.checked
    }
    sorteesArr.push(addName);
    sort();
    name.value = ""
}
