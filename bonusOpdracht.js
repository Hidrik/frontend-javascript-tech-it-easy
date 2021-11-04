// VOORRAAD ARRAY MET TV'S
const inventoryBonus = [
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

//Ik heb ervoor gekozen om de functies altijd een waarde/array te laten returnen en niet het vanuit de functie te loggen.
//Dit leek me netter/beter en zo hoort het volgens mij ook.


//SORTEER OP PRIJS
//Functie die sorteert op prijs
const sortOnPrices = inventory => {
    sortedOnPrice = inventory.sort((current, previous) => {
            if (current.price > previous.price) {
                return 1
            } else if (current.price < previous.price) {
                return -1
            } else {
                return 0
            }
        }
    )
    return sortedOnPrice
}

//Koppeling HTML element aan variabele
const sortPriceButton = document.getElementById('sortPrice')
//Registreert of er geklikt wordt en voert dan een functie uit. Deze functie logt de uitkomst van de sortOnPrice functie
sortPriceButton.addEventListener('click', () => console.log(sortOnPrices(inventoryBonus)))

//SORTEER OP AMBILIGHT
//Ik vind in dit geval een arrowfunctie op één regel niet zo mooi en leesbaar, dus daarom heb ik het ook anders gedaan.
//Zie hieronder het verschil.
let haveAmbiLights = inventory => inventory.filter(inventory => inventory.options.ambiLight)

//Deze functie geeft een array terug met TV's die ambiLight hebben
haveAmbiLights = inventory => {
    return inventory.filter(inventory => inventory.options.ambiLight)
}
//Koppeling HTML element aan variabele
const sortAmbiLightButton= document.getElementById('sortAmbiLight')
//Registreert of er geklikt wordt en voert dan een functie uit. Deze functie logt de uitkomst van de haveAmbiLight functie
sortAmbiLightButton.addEventListener('click', () => console.log(haveAmbiLights(inventoryBonus)))


//SORTEER OP UITVERKOCHT
//Dit kan ook op één regel maar dat vond ik niet zo leesbaar meer...
//Deze functie geeft een array terug met uitverkochte TV's
const soldOutTvs = inventory => {
    return inventory.filter(inventory => (inventory.originalStock - inventory.sold) === 0)
}
//Koppeling HTML element aan variabele
const sortSoldOutTvsButton = document.getElementById('sortSoldOut')
//Registreert of er geklikt wordt en voert dan een functie uit. Deze functie logt de uitkomt van soldOutTvs functie.
sortSoldOutTvsButton.addEventListener('click', () => console.log(soldOutTvs(inventoryBonus)))

//Bovenstaande kan ook op één regel maar dat is helemaal niet meer leesbaar. Zie de comment hieronder.
        // document.getElementById('sortSoldOut').addEventListener('click', () => console.log(soldOutTvs(inventory)))