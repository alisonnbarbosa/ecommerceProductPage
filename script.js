const imgM = document.querySelector('.img-main')//img principal do site
const lightbox = document.querySelector('.lightbox')
const btClose = document.querySelector('.btClose')

imgM.addEventListener('click', ()=> {if(window.innerWidth > 899){lightbox.style.display = 'flex'}})
btClose.addEventListener('click', ()=> lightbox.style.display = 'none')

const imgL = document.getElementById('imgL')//img do lightbox

let imgs = [document.getElementById('img1'),document.getElementById('img2'),document.getElementById('img3'),
document.getElementById('img4')]

//preview do lightbox
let imgsL = [document.getElementById('img01'),document.getElementById('img02'),document.getElementById('img03'),
document.getElementById('img04')]

function trocarImg(img){
    imgM.src = `img/image-product-${img}.jpg`
    imgL.src = `img/image-product-${img}.jpg`

    indicarImg(img)
}

imgs[0].addEventListener('click', ()=> trocarImg(1))
imgs[1].addEventListener('click', ()=> trocarImg(2))
imgs[2].addEventListener('click', ()=> trocarImg(3))
imgs[3].addEventListener('click', ()=> trocarImg(4))

imgsL[0].addEventListener('click', ()=> trocarImg(1))
imgsL[1].addEventListener('click', ()=> trocarImg(2))
imgsL[2].addEventListener('click', ()=> trocarImg(3))
imgsL[3].addEventListener('click', ()=> trocarImg(4))

/*nav das imgs através dos buttons*/
const btPreviousL = document.querySelector('.btPreviousL')
const btNextL = document.querySelector('.btNextL')
const btPrevious = document.querySelector('.btPrevious')
const btNext = document.querySelector('.btNext')

let numL = 0

function navImgButtons(num){
    numL = numL + num
    
    if(numL > 4){
        numL = 1
    } else if(numL < 1){
        numL = 4
    }
    trocarImg(numL)
}

btPreviousL.addEventListener('click', ()=> navImgButtons(-1))
btNextL.addEventListener('click', ()=> navImgButtons(1))
btPrevious.addEventListener('click', ()=> navImgButtons(-1))
btNext.addEventListener('click', ()=> navImgButtons(1))

/*indicar qual img o usuário está visualizando*/
function indicarImg(num){
    num == 1?imgSel(imgs[0],imgsL[0]):removeImgSel(imgs[0],imgsL[0])
    num == 2?imgSel(imgs[1],imgsL[1]):removeImgSel(imgs[1],imgsL[1])
    num == 3?imgSel(imgs[2],imgsL[2]):removeImgSel(imgs[2],imgsL[2])
    num == 4?imgSel(imgs[3],imgsL[3]):removeImgSel(imgs[3],imgsL[3])
}
function imgSel(img, imgL){
    img.classList = 'select'
    imgL.classList = 'select'
}
function removeImgSel(img, imgL){
    img.className = 'thumbnail'
    imgL.className = 'thumbnail'
}

/*indicar quantidade de produtos*/
document.querySelector('.btMenos').addEventListener('click', ()=> quantidadeProduto(-1))
document.querySelector('.btMais').addEventListener('click', ()=> quantidadeProduto(1))

let outNum = document.querySelector('.outNum')
let num = 0

function quantidadeProduto(n){
    num = num + n

    if(num < 0){
        num = 0
        return
    }
    outNum.textContent = num
}

/*cria a div cart*/
const btC = document.querySelector('.btC')
const btCart = document.querySelector('.btCart')
const profile = document.querySelector('.profile')
const indicador = document.querySelector('.indicador')

let click = 0
let div = document.createElement('div')
div.className = 'container-cart'

function criarDivCart(){
    click++

    if(num == 0){
        if(click > 1){
            return
        }
        div.innerHTML = `<h1>Cart</h1>
        <hr>
        <div class="content-cart">
            <p class='p'>Your cart is empty.</p>
        </div>`
    } else{
        div.innerHTML = `<h1>Cart</h1>
        <hr>
        <div class="content-cart">
            <img src="img/image-product-1-thumbnail.jpg" alt="imagem de tênis" class="img-cart">
            <div>
                <p class="p-cart">Fall Limited Edition Sneakers</p>
                <p>$125.00 x <span>${num}</span> <span class="outTotal">$${num*125}</span></p>
            </div>
            <button class="btDelete"><img src="img/icon-delete.svg" alt="delete"></button>
        </div>
        <button class="bt-cart">Checkout</button>`

        var btDelete = document.querySelector('.btDelete') 
        btDelete.addEventListener('click', ()=> deleteCart())
    }
    profile.appendChild(div)

    indicarNum(num)
    quantidadeProduto(num = 0)
}
btC.addEventListener('click', criarDivCart)

btCart.addEventListener('click', ()=> div.classList.toggle('visible'))

criarDivCart()

function indicarNum(n){
    if(n > 0){    
        indicador.textContent = num
        indicador.style.display = 'block'
    } else {
        indicador.style.display = 'none'
    }
}

function deleteCart(){
    div.innerHTML = `<h1>Cart</h1>
        <hr>
        <div class="content-cart">
            <p class='p'>Your cart is empty.</p>
        </div>`;
    profile.appendChild(div)

    indicarNum(0)
}

/*menu responsivo*/
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', ()=> navbar.style.transform = 'translateX(0)')
closeMenu.addEventListener('click', ()=> navbar.style.transform= 'translateX(-100%)')