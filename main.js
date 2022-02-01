let chooseSize = document.querySelector('.size-choice');
let chooseSizeVariant = document.querySelector('.size-choice-empty');
chooseSize.addEventListener('click', () => chooseSizeVariant.classList.toggle('none')); 


const subscribeBtn = document.querySelector('.subscribe-button');

subscribeBtn.addEventListener('click', validEmail);

function validEmail() { 
    let regularExp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i,
    emailText = document.querySelector('.subscribe-email').value;
    errorText = document.querySelector('.error'),
    valid = regularExp.test(emailText);
    if (!valid) {
        errorText.classList.remove('none');
    } 
    else {
        document.querySelector('.subscribe-email').value = "";
    }   
};

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function() {
    document.querySelector('.subscribe-email').value = "";
    document.querySelector('.error').classList.add('none');

});

const fullPhoto = document.querySelectorAll('.content-photo-full');
const minPhoto = document.querySelectorAll('.content-photo-min-item');
let currentPhoto = 0;

function switchPhoto(index) {
    fullPhoto[currentPhoto].classList.add('none');
    currentPhoto = index;
    fullPhoto[currentPhoto].classList.remove('none');
}

for (let i = 0; i < fullPhoto.length; i++) {
    minPhoto[i].addEventListener('click', function() {
        switchPhoto(i);
    });
}

const minGalleryPhoto = document.querySelectorAll('.photo-wrapper-small');

for (let i = 0; i < minGalleryPhoto.length; i++) {
    minGalleryPhoto[i].addEventListener('mouseover', function() {
        const element = minGalleryPhoto[i].querySelector('.photo-wrapper-hover');
        element.classList.remove('none');
    });
    minGalleryPhoto[i].addEventListener('mouseout', function() {
        const element = minGalleryPhoto[i].querySelector('.photo-wrapper-hover');
        element.classList.add('none');
    });
}

const menuIcon = document.getElementById('menu-icon');
function chageSize() {
    if (document.documentElement.clientWidth < 500) {
        menuIcon.classList.remove('none');
    }
    else {
        menuIcon.classList.add('none');
    }
}
window.addEventListener('resize', chageSize);
chageSize();

const mobileMenu = document.querySelector('.header-menu');
menuIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('none');
    
});

document.addEventListener('click', function(e) {
    if (e.target != mobileMenu && e.target != menuIcon) {
        mobileMenu.classList.add('none');
    };
});

const btnMinus = document.querySelector('div[data-action="minus"]');
const btnPlus = document.querySelector('div[data-action="plus"]');
const counter = document.querySelector('div[data-counter]');

btnMinus.addEventListener('click', function() {
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    };
});

btnPlus.addEventListener('click', function() {
    counter.innerText = ++counter.innerText;
});

const btnCart = document.querySelector('.cart');
const btnFavourites = document.querySelector('.favourites');
const btnSvgFavourites = document.getElementById('favourites');

const popUp = document.querySelector('.popup');
const popUpText = document.querySelector('.popup-text');

btnCart.addEventListener('click', function() {
    if (parseInt(counter.innerText) === 1) {
        popUpText.innerText = "Товар в количестве 1 единицы добавлен в корзину!";
    }
    else {
        popUpText.innerText = "Товар в количестве " + counter.innerText + " единиц добавлен в корзину!";
    }
    popUp.classList.remove('none');
});

btnFavourites.addEventListener('click', clickFavourites);
btnSvgFavourites.addEventListener('click', clickFavourites);


function clickFavourites() {
    if (parseInt(counter.innerText) === 1) {
        popUpText.innerText = "Товар в количестве 1 единицы добавлен в избранное!";
    }
    else {
        popUpText.innerText = "Товар в количестве " + counter.innerText + " единиц добавлен в избранное!";
    }
    popUp.classList.remove('none');
};

document.addEventListener('click', function(event) {
    if (event.target != popUpText && event.target != btnCart && event.target != btnFavourites && event.target != btnSvgFavourites) {
        popUp.classList.add('none');
    }
});


const header = document.querySelector('.header');
let prevScroll = window.pageYOffset;
let currentScroll; 

window.addEventListener('scroll', function() {
    currentScroll = window.pageYOffset;
    const headerHidden = () => header.classList.contains('header-hidden');
    if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add('header-hidden');
    }
    else {
        header.classList.remove('header-hidden');
    }    
    prevScroll = currentScroll;
});    


// товар '...' в количестве '...' единиц добавлен в корзину/избранное