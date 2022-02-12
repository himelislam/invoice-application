// Buyer Details Submit Button

const submitButton = document.getElementById('detail-submit-btn');

submitButton.addEventListener('click', function(){
    const buyerDetailsInput = document.getElementById('buyer-details-input');
    const buyerDetails = buyerDetailsInput.value;

    const buyerInfo = document.getElementById('buyer-info');
    buyerInfo.innerText = buyerDetails;
})

// Item Details Add Button

const addButton = document.getElementById('add-details-btn');

addButton.addEventListener('click', function(){
    const itemName = document.getElementById('item-name-input').value;
    const itemPrice = document.getElementById('item-price-input').value;
    const itemQuantity = document.getElementById('item-quantity-input').value;

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.classList.add('item-total');

    th.innerText = itemName;
    td1.innerText = itemPrice;
    td2.innerText = itemQuantity;
    td3.innerText = itemPrice * itemQuantity;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    const infoTable = document.getElementById('info-table');

    infoTable.appendChild(tr);

    totalCalculation();
})

// total calculation

function totalCalculation(){
    const subTotal = calculatingSubTotal();

    const tax = subTotal * 0.2;
    const grandTotal = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = grandTotal;
}

// calculating subtotal

function calculatingSubTotal(){
    // debugger;
    let subtotal = 0;
    const itemTotal = document.getElementsByClassName('item-total');
    for(let i = 0; i < itemTotal.length; i++){
        const element = itemTotal[i];
        const price = parseInt(element.innerText);

        subtotal = subtotal + price;
    }
    return subtotal;
}

