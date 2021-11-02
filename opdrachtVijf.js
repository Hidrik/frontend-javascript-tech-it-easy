// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//5a
console.log('Opdracht 5A')
function tvBrandTypeNameString(TV) {
    return TV.brand + ' ' + TV.type + ' - ' + TV.name
}

//Kan ook zo
tvBrandTypeNameString = TV => TV.brand + ' ' + TV.type + ' - ' + TV.name
console.log(tvBrandTypeNameString(inventory[1]))

//5b
console.log('Opdracht 5B')
tvPriceString = (price) => "€ " + price + ',-'
console.log(tvPriceString(inventory[0].price))

//5c
console.log('Opdracht 5C')
getScreenSize = size => {
    const inchToCm = 2.54
    let returnString = ''
    for (let i = 0; i < size.length; i++) {
        returnString += +size[i] + ' inch ' + '(' + (size[i] * inchToCm) + ' cm)'
        if (i === size.length - 1) {
            break
        } else {
            returnString += ' | '
        }
    }
    return returnString
}

console.log(getScreenSize(inventory[0].availableSizes))

//5d
console.log('Opdracht 5D')
const tvToShow = inventory[0]

const containerHtml = document.getElementById('container')
const tvOnHtml = document.createElement("p");
containerHtml.appendChild(tvOnHtml);
tvOnHtml.innerHTML = tvBrandTypeNameString(tvToShow);
tvOnHtml.innerHTML += '<br/>' + tvPriceString(tvToShow.price);
tvOnHtml.innerHTML += '<br/>' + tvPriceString(getScreenSize(tvToShow.availableSizes));

//5e
console.log('Opdracht 5E')
function showTvsOnHtml(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        const showTvOnHtml = document.createElement("p");
        containerHtml.appendChild(showTvOnHtml);
        showTvOnHtml.innerHTML = tvBrandTypeNameString(inventory[i]);
        showTvOnHtml.innerHTML += '<br/>' + tvPriceString(inventory[i].price);
        showTvOnHtml.innerHTML += '<br/>' + getScreenSize(inventory[i].availableSizes);
    }
}

showTvsOnHtml(inventory)
