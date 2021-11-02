const preBtn = document.querySelector('.slide-btn--pre')
const nextBtn = document.querySelector('.slide-btn--next')

const popularDishesTitles = document.querySelectorAll('.popular-dishes__title-item a')

const popularDishesPizza = document.querySelector('.popular-dishes__title-item.pizza a')
const popularDishesDrink = document.querySelector('.popular-dishes__title-item.drink a')

const rowPopularDishesPizza = document.querySelector('.row.popular-dishes__pizza')
const rowPopularDishesDrink = document.querySelector('.popular-dishes__drink')



var current = 0;
nextBtn.addEventListener('click', function(e) {
    if (current >= 0 && current <= 4) {
        current++;
    } 

    if (current >= 5) {
        current = 0;
    }
        
   
    var transformX = current * (-100);
    var categories = document.querySelectorAll('.category')
    for(let i = 0;i < categories.length;i++){
        const category = categories[i];
        category.style.transform = `translateX(${transformX}%)`;
    }
})

preBtn.addEventListener('click', function(e) {
    
    if (current <= 5) {
        current--;
    }
        
    if (current <= 0){
        current = 0;
    }
    var transformX = current * (-100);
    var categories = document.querySelectorAll('.category')
    for(let i = 0;i < categories.length;i++){
        const category = categories[i];
        category.style.transform = `translateX(${transformX}%)`;
    }
})

    
setInterval(function() {
    if (current >= 0 && current <= 4)
        current++;
    if (current >= 5)
        current = 0;
    var transformX = current * (-100);   
    var categories = document.querySelectorAll('.category')
    for(let i = 0;i < categories.length;i++){
        const category = categories[i];
        category.style.transform = `translateX(${transformX}%)`;
    }
}, 5000)
// function autoSlides() {
//     current++;
//     if (current > 4) {
//         current = 0;
//         nextBtn.disabled = true;
//     }
//     else {
//         nextBtn.disabled = false;
//     }
//     var transformX = current * (-100);
//     var categories = document.querySelectorAll('.category')
//     for(let i = 0;i < categories.length;i++){
//         const category = categories[i];
//         category.style.transform = `translateX(${transformX}%)`;
//     }
//     // setTimeout(showSlides, 2000); 
// }

// setInterval(autoSlides, 4000)

for (let i = 0;i < popularDishesTitles.length; i++) {
    popularDishesTitle = popularDishesTitles[i];
    popularDishesTitle.onclick = function(e) {
        const popularDishesTitleActive = document.querySelector('.popular-dishes__title-item .active')
        e.preventDefault();


        if (popularDishesTitleActive.classList.contains('active'))
            popularDishesTitleActive.classList.remove('active')
        e.target.classList.add('active');

        if (popularDishesPizza.classList.contains('active')) {
            rowPopularDishesPizza.classList.add('active')
            rowPopularDishesPizza.classList.remove('hide')

        }
        else {
            rowPopularDishesPizza.classList.remove('active')
            rowPopularDishesPizza.classList.add('hide')

        }

        if (popularDishesDrink.classList.contains('active')) {
            rowPopularDishesDrink.classList.add('active')
            rowPopularDishesDrink.classList.remove('hide')
        }  
        else {
            rowPopularDishesDrink.classList.remove('active')
            rowPopularDishesDrink.classList.add('hide')
        }  
        }
            

    }

// Header: scroll event
const headerTop = document.querySelector('.header__header-top')
const headerNav = document.querySelector('.header__header-nav')
const banner = document.querySelector('.banner')
document.addEventListener('scroll', function(e) {
    if (window.scrollY > 30) {
        headerNav.classList.add('scroll')
        headerTop.classList.add('hide')
    } 
    else {
        headerNav.classList.remove('scroll')
        headerTop.classList.remove('hide')
    }
})

// Scroll to Top
const scrollBtn = document.querySelector('.scroll-top')
const scrollBtnMobile = document.querySelector('.scroll-top-mobile')

window.addEventListener('scroll', function(e) {
    if (window.scrollY > 200) {
        scrollBtn.style.transform = `translateY(${0}px)`;
        scrollBtnMobile.style.transform = `translateY(${0}px)`;
    }
    else {
        scrollBtn.style.transform = `translateY(${100}px)`;
        scrollBtnMobile.style.transform = `translateY(${100}px)`;
    }
        
});

scrollBtn.addEventListener('click', function(e) {
    headerTop.scrollIntoView({
        'behavior': 'smooth',
    }
    )
})

scrollBtnMobile.addEventListener('click', function(e) {
    banner.scrollIntoView({
        'behavior': 'smooth',
    }
    )
})


//add to cart

const popularDishesCartBtns = document.querySelectorAll('.popular-dishes__item__body__buy .cart')
const modalCart = document.querySelector('.modal-cart')
const modalCartCloseBtn = document.querySelector('.action .btn-close')
const cartDeleteAllItemBtn = document.querySelector('.cart__item__delete-all-btn')
const headerCart = document.getElementById('header__cart')

const headerMobileCart = document.getElementById('header--mobile__cart')
const modalMobileCart = document.querySelector('.modal-cart--mobile')

const closeIcon = document.getElementById('close-icon')

modalCartCloseBtn.onclick = function() {
    modalCart.style.opacity =  0;
    modalCart.style.transform = `translateX(${100}%)`;

}

closeIcon.onclick = function() {
    modalCart.style.opacity =  0;
    modalCart.style.transform = `translateX(${100}%)`;
}

cartDeleteAllItemBtn.onclick = function() {
    localStorage.removeItem('item');
    showCart();
    countItem();
}
headerCart.onclick = function(e) {
    e.preventDefault();
    const isClosed = modalCart.style.display !== 'block'
    if (isClosed) {
        modalCart.style.opacity =  1;
        modalCart.style.transform = `translateX(${0}px)`;
    }
    else {
        modalCart.style.opacity =  0;
        modalCart.style.transform = `translateX(${100}%)`;
    }
    showCart();

}

headerMobileCart.onclick = function(e) {
    e.preventDefault();
    const isClosed = modalCart.style.display !== 'block'
    if (isClosed) {
        modalCart.style.opacity =  1;
        modalCart.style.transform = `translateX(${0}px)`;
    }
    else {
        modalCart.style.opacity =  0;
        modalCart.style.transform = `translateX(${100}%)`;
    }
    showCart();
}


//Moblie header nav
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



for (let i = 0;i < popularDishesCartBtns.length;i++) {
    const popularDishesCartBtn = popularDishesCartBtns[i]
    popularDishesCartBtn.onclick = function(e) {
        const popularDishesBody = e.target.parentElement.parentElement;
        const popularDishesItemTitleElement = popularDishesBody.children[0];
        const popularDishesItemTitle = popularDishesItemTitleElement.innerText;
        const popularDishesBuy = e.target.parentElement;
        const priceItemElement = popularDishesBuy.children;

        const popularDishesItem = e.target.parentElement.parentElement.parentElement;

        var arrayItem = []
        if (localStorage.getItem('item')) {
            arrayItem = JSON.parse(localStorage.getItem('item'))
        }

        if (priceItemElement.length === 3) {
            var priceItem = priceItemElement[1]

        }
        else {
            var priceItem = priceItemElement[0]
        }
            
        const priceItemValue = parseFloat(priceItem.children[0].innerText);
        

        const imgSrc = popularDishesItem.children[0].children[1].children[0].src
        const imgSrcText = imgSrc.split('/').slice(4, 9).join('/')
        console.log(imgSrcText)
        let count = 1;
        const cost = priceItemValue * count;
        const Item = new Array(popularDishesItemTitle, count, priceItemValue, cost, imgSrcText)

        flag = false;
        for (let i = 0; i < arrayItem.length;i++) {
            if (arrayItem[i][0] == popularDishesItemTitle ) {
                count += parseInt(arrayItem[i][1]);
                arrayItem[i][3] = (priceItemValue * count).toFixed(2);
                arrayItem[i][1] = count;
                flag = true;
                break;
            }
        }
        if (flag == false) {
            arrayItem.push(Item)
        }

        localStorage.setItem('item', JSON.stringify(arrayItem));
        showCart();
        countItem();

    }
}


function showCart() {

    const cartBodyContent = document.querySelector('.cart__body')
    const cartFooter = document.querySelector('.cart__footer')


    var cartInfo = "";
    var cartTotalCost = "";
    var total = 0;
    let arrayItemFromLocalStorage = []
    if (localStorage.getItem('item')) {
        arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))
    }
    if (arrayItemFromLocalStorage.length == 0) {
        cartInfo += `<tr>
                        <th colspan="5">Empty</th>
                    </tr>`;
        cartTotalCost = `
                        <p class="cart__footer__title">Total:</p>
                        <p class="total">${total}</p>`
        cartBodyContent.innerHTML = cartInfo;
        cartFooter.innerHTML = cartTotalCost;

        return;
    }
     
    for (let i = 0;i < arrayItemFromLocalStorage.length;i++) {
        total += parseFloat(arrayItemFromLocalStorage[i][3]);
        cartInfo += `
                    <tr>
                        <td>${arrayItemFromLocalStorage[i][0]}</td>
                        <td>${arrayItemFromLocalStorage[i][1]}</td>
                        <td>${arrayItemFromLocalStorage[i][2]}</td>
                        <td>${arrayItemFromLocalStorage[i][3]}</td>
                        <td>
                            <button onclick="deleteItem(this)" class="button cart__item__delete-btn">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>`

    }
    cartTotalCost = `
                    <p class="cart__footer__title">Total:</p>
                    <p class="total">${total.toFixed(2)} £</p>`


    
    cartBodyContent.innerHTML = cartInfo;
    cartFooter.innerHTML = cartTotalCost;
}

const countItemCart = document.querySelector('.header__cart__count-item')
const countItemCartMobile = document.querySelector('.header--mobile__cart__count-item')

function countItem() {
    let arrayItemFromLocalStorage = []
    if (localStorage.getItem('item')) {
        arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))
    }
    countItemCart.innerText = arrayItemFromLocalStorage.length
    countItemCartMobile.innerText = arrayItemFromLocalStorage.length
    headerCart.classList.add('cart-animation')
    headerMobileCart.classList.add('cart-animation')
    setTimeout(function() {
        headerCart.classList.remove('cart-animation')
        headerMobileCart.classList.remove('cart-animation')
    }, 500)
}
    
window.onload = function() {
    countItem();
}

function deleteItem(x) {
             
    const tr = x.parentElement.parentElement;
    const nameItem = tr.children[0].innerText;

    let arrayItemFromLocalStorage = JSON.parse(localStorage.getItem('item'))

    for (let i = 0;i < arrayItemFromLocalStorage.length;i++){
        if (arrayItemFromLocalStorage[i][0] == nameItem)
            arrayItemFromLocalStorage.splice(i, 1)
    }    
    localStorage.setItem('item', JSON.stringify(arrayItemFromLocalStorage));  
    showCart();
    countItem();

}
