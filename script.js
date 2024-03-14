const imgM = document.querySelector('.img-main')//img principal do site
const lightbox = document.querySelector('.lightbox')
const btClose = document.querySelector('.btClose')

imgM.addEventListener('click', ()=> {if(window.innerWidth > 999){lightbox.style.display = 'flex'}})
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

let numL = 1

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
const white = document.querySelector('.white')

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
    img.classList = 'thumbnail'
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
const profile = document.querySelector('.profile')