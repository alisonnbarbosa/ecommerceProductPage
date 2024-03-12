const imgM = document.querySelector('.img-main')//img principal do site
const lightbox = document.querySelector('.lightbox')
const btClose = document.querySelector('.btClose')

imgM.addEventListener('click', ()=> {if(window.innerWidth > 999){lightbox.style.display = 'flex'}})
btClose.addEventListener('click', ()=> lightbox.style.display = 'none')

const imgL = document.getElementById('imgL')//img do lightbox

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')

//preview do lightbox
const img01 = document.getElementById('img01')
const img02 = document.getElementById('img02')
const img03 = document.getElementById('img03')
const img04 = document.getElementById('img04')

function trocarImg(img){
    imgM.src = `img/image-product-${img}.jpg`
    imgL.src = `img/image-product-${img}.jpg`
}

img1.addEventListener('click', ()=> trocarImg(1))
img2.addEventListener('click', ()=> trocarImg(2))
img3.addEventListener('click', ()=> trocarImg(3))
img4.addEventListener('click', ()=> trocarImg(4))

img01.addEventListener('click', ()=> trocarImg(1))
img02.addEventListener('click', ()=> trocarImg(2))
img03.addEventListener('click', ()=> trocarImg(3))
img04.addEventListener('click', ()=> trocarImg(4))