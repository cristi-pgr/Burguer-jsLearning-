const list = document.querySelector('ul')
const showAllButton = document.querySelector('.show-all')
const discountButton = document.querySelector('.discount-button')
const totalValueSum = document.querySelector('.total-value-sum')
const filterButton = document.querySelector('.filter-button')
const addButton = document.querySelector('.add-button')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
    return newValue
}


function showAll(productarray) {

    let myLi = ''

    productarray.forEach(product => {

        myLi += `
     <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
     </li>
    `
    })

    list.innerHTML = myLi
}


function totalValueButton() {
    const totalValue = menuOptions.reduce((acc, productprice) => {
        const result = productprice.price
        return acc + result

    }, 0)

    list.innerHTML =
        `
    <li>
    <p> Total value of burgers is : ${formatCurrency(totalValue)}</p>
    </li>
    `

}

function mapdiscountButton() {
    const mapdiscount = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(mapdiscount)
}


function filterveganButton() {

    const filterVegan = menuOptions.filter(veganproducts => veganproducts.vegan)

    showAll(filterVegan)

}




showAllButton.addEventListener('click', () => showAll(menuOptions))
discountButton.addEventListener('click', mapdiscountButton)
totalValueSum.addEventListener('click', totalValueButton)
filterButton.addEventListener('click', filterveganButton)
addButton.addEventListener('click', addButtonProduct)