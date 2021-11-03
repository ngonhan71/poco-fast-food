const cartBody = document.getElementById('table-body')
const cartFoot = document.getElementById('table-foot')

function showCart() {
    const arrayItem = JSON.parse(localStorage.getItem('item'))
    let cartInfo = "";
    let cartTotal = "";
    let total = 0;
    for (let i = 0;i < arrayItem.length;i++){
        total += (parseFloat(arrayItem[i][1]) * parseFloat(arrayItem[i][2]));
        console.log(arrayItem[i][3])
        cartInfo += `
                    <tr>
                        <td>
                            <img src="./public/img/${arrayItem[i][3]}" alt="">
                        </td>
                        <td>${arrayItem[i][0]}</td>
                        <td>
                            <input type="number" step="1" min="1" value="${arrayItem[i][1]}">          
                        </td>
                        <td>${arrayItem[i][2]}</td>
                        <td>${(arrayItem[i][1] * arrayItem[i][2]).toFixed(2)}</td>
                        <td>
                            <button onclick="deleteItem(this)" class="button cart__item__delete-btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>`

    }
    cartTotal += `<tr>
                    <th colspan="4">Tổng cộng</th>
                    <th colspan="2">${total.toFixed(2)} (£)</th>
                </tr>`
    cartBody.innerHTML = cartInfo;
    cartFoot.innerHTML = cartTotal;
    countItem();
    const inputCounts = document.querySelectorAll('#table-body td input')
    inputCounts.forEach((input, index) => {
        input.onchange = function() {
            let tr = input.parentElement.parentElement;
            // Cap nhat tien
            let newValue = parseInt(input.value);
            let newCost = (newValue * parseFloat(tr.children[3].innerText)).toFixed(2)
            tr.children[4].innerText = newCost;
            updateTotal();
            //Cap nhat count local
            let arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))
            arrayItemFromLocalStorage[index][1] = newValue;
            localStorage.setItem('item', JSON.stringify(arrayItemFromLocalStorage))

        }
    })
}

function updateTotal() {
    total = 0;
    let tBody = document.getElementById('table-body')
    let tRowS = tBody.children
    for (let i = 0; i < tRowS.length;i++) {
        tRow = tRowS[i]
        total += parseFloat(tRow.children[4].innerText)
    }
  cartFoot.children[0].children[1].innerText = `${total.toFixed(2)} (£)`;
}

window.onload = function() {
    showCart();
    
}






const countItemCart = document.querySelector('.header__cart__count-item')
const countItemCartMobile = document.querySelector('.header--mobile__cart__count-item')
const headerCart = document.getElementById('header__cart')
function countItem() {
    let arrayItemFromLocalStorage = []
    if (localStorage.getItem('item')) {
        arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))
    }
    countItemCart.innerText = arrayItemFromLocalStorage.length
    countItemCartMobile.innerText = arrayItemFromLocalStorage.length
    headerCart.classList.add('cart-animation')
    setTimeout(function() {
        headerCart.classList.remove('cart-animation')
    }, 500)
}


function deleteItem(x) {
             
    const tr = x.parentElement.parentElement;
    const nameItem = tr.children[1].innerText;
    let arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))

    for (let i = 0;i < arrayItemFromLocalStorage.length;i++){
        if (arrayItemFromLocalStorage[i][0] == nameItem)
            arrayItemFromLocalStorage.splice(i, 1)
    }    
    localStorage.setItem('item', JSON.stringify(arrayItemFromLocalStorage));  
    showCart();
    countItem();

}

//header mobile

const menuBar = document.getElementById('menu-bar')
const headerMobileMenu = document.querySelector('.header--mobile__header-menu')
console.log(menuBar, headerMobileMenu)
menuBar.onclick = function() {
    const isClosed = headerMobileMenu.style.display !== 'block';
    if (isClosed) {
        headerMobileMenu.style.display = 'block';
        headerMobileMenu.classList.add('open')
    }
    else {
        headerMobileMenu.style.display = 'none';
        headerMobileMenu.classList.remove('open');
    }
}



 

let html = ``;
fetch('./public/js/tinh-thanh.json')
    .then(res => res.json())
    .then((data) => {
        for(let key in data) {
            if (key == 0)
                html += `<option value="${key}" selected disabled>${data[key].name}</option>`
            else html += `<option value="${key}">${data[key].name}</option>`
        }
        const selectProvince = document.getElementById('province')
        selectProvince.innerHTML = html
})

const selectProvince = document.getElementById('province')
selectProvince.onchange = function() {
    const codeProvince = selectProvince.options[selectProvince.selectedIndex].value
    console.log(codeProvince)
    let html = ``;

    fetch('./public/js/quan-huyen.json')
        .then(res => res.json())
        .then((data) => {
            // console.log(data)
            let first = true;
            for (let key in data) {
                console.log(codeProvince == data[key].parent_code)
                if (codeProvince == data[key].parent_code) {
                    var districtName = ''
                        if (data[key].name_with_type)
                                districtName = data[key].name_with_type
                        else districtName = data[key].name
                    if (first) {
                        
                        html += `<option value="${key}" selected>${districtName}</option>`
                        first = false;
                    }
                    else {
                        html += `<option value="${key}">${districtName}</option>`
                    }
                }
            }
            console.log(html)
            const selectDistrict = document.getElementById('district')
            selectDistrict.innerHTML = html
    })

}

const cartInfo = document.getElementById('cart-info')
const closeBtn = document.querySelector('.cart__info-header i')

const orderBtn = document.querySelector('.cart__container .button') 

orderBtn.onclick = function() {
    cartInfo.classList.add('active')
}

closeBtn.onclick = function() {
    cartInfo.classList.remove('active')
}
