
function calcTip(){
    let price = document.getElementById('price').value;
    let tip = document.getElementById('tips').value;
    let numberPeople = document.getElementById('numberPeople').value;

    console.log(price);
    console.log(tip);
    console.log(numberPeople);

    if(numberPeople === "" || numberPeople <= 1){
        numberPeople = 1;
        document.getElementById('person').textContent = numberPeople;
    }else{
        document.getElementById('person').textContent = numberPeople;
    }

    let tipPerson = (price * tip) / numberPeople;
    tipPerson = Math.round(tipPerson * 100) / 100;
    document.getElementById('tipPerson').textContent = tipPerson;

    let tipTotal = tipPerson * numberPeople;
    document.getElementById('totalTip').textContent = tipTotal;

    let totalAmount = parseInt(price) + parseInt(tipTotal);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

document.getElementById('calc').onclick = function(){calcTip();};