const cartBody = document.getElementById('table-body')
const cartFoot = document.getElementById('table-foot')

function showCart() {
    const arrayItem = JSON.parse(localStorage.getItem('item'))
    let cartInfo = "";
    let cartTotal = "";
    let total = 0;
    for (let i = 0;i < arrayItem.length;i++){
        total += parseFloat(arrayItem[i][3]);
        cartInfo += `
                    <tr>
                        <td>
                            <img src="../public/${arrayItem[i][4]}" alt="">
                        </td>
                        <td>${arrayItem[i][0]}</td>
                        <td>${arrayItem[i][1]}</td>
                        <td>${arrayItem[i][2]}</td>
                        <td>${arrayItem[i][3]}</td>
                        <td>
                            <button onclick="deleteItem(this)" class="button cart__item__delete-btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>`

    }
    cartTotal += `<tr>
                    <th colspan="4">Tổng cộng</th>
                    <th colspan="2">${total.toFixed(2)}. (£)</th>
                </tr>`
    cartBody.innerHTML = cartInfo;
    cartFoot.innerHTML = cartTotal;
    countItem();

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


