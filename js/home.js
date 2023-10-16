/**
 * case 1: querySelectorAll to apply effects on all product containers within the page
 */
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

})

/**
 * case 2: apply effects on a single product container
 */
/*const nxtBtn = document.getElementById('nxt-btn');
const preBtn = document.getElementById('pre-btn');
let productContainer = document.getElementById('product-container');

let containerDimenstions = productContainer.getBoundingClientRect();
let containerWidth = containerDimenstions.width;

nxtBtn.addEventListener('click', () => {
    productContainer.scrollLeft += containerWidth ;
})

preBtn.addEventListener('click', () => {
    productContainer.scrollLeft -= containerWidth ;
})*/
