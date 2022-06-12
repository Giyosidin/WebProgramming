const menu = [
    {
        id:0,
        item: "우동",
        price: 5000,
        num: 0,
        itemPrice: 0
    }, {
        id: 1,
        item: "짜장면",
        price: 5000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 2,
        item: "짬뽕",
        price: 6000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 3,
        item: "뽁음밥",
        price: 8000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 4,
        item: "당수육",
        price: 15000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 5,
        item: "ㅇ라랄",
        price: 30000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 6,
        item: "짜장면",
        price: 35000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 7,
        item: "짜장면",
        price: 8000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 8,
        item: "짜장면",
        price: 30000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 9,
        item: "짜장면",
        price: 5000,
        num: 0,
        itemPrice: 0
    },
    {
        id: 10,
        item: "짜장면",
        price: 5000,
        num: 0,
        itemPrice: 0
    },
]

let menuTable = document.getElementById("menuTable");
let sumPrice = document.getElementById("sum");


function generateTable(){
    menuTable.innerHTML = "";
    menu.forEach(function(item){
        let tr = `<tr>
        <td>${item.id}</td>
        <td>${item.item}</td>
        <td>${item.price}</td>
        <td>${item.num}</td>
        <td>${item.itemPrice}</td>
        <td> <button type="button" class="btn btn-primary" onclick="select(${item.id})"> + </button> </td>
        <td> <button type="button" class="btn btn-secondary"onclick="unselect(${item.id})"> - </button> </td>
        </tr> `;
        menuTable.innerHTML += tr;
    });
}
generateTable();
calcSum();

function select(item){
    menu[item].num += 1;
    menu[item].itemPrice = menu[item].num * menu[item].price;
    generateTable();
    calcSum();
};
function unselect(item){
    menu[item].num = 0;
    menu[item].itemPrice = menu[item].num * menu[item].price;
    generateTable();
    calcSum();
};

function calcSum() {
    let sum = 0;
    menu.forEach(function(item) {
        item.itemPrice = item.price * item.num;
        sum += item.itemPrice;
    });
    sumPrice.innerHTML = sum;

}