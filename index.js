const products = [
  {
    name: "Burlap Console Vases",
    price: 1200,
    img: "./asset/img14.jpg",
  },
  {
    name: "Champagne Gold Crystal Vase",
    price: 800,
    img: "./asset/img3.jpg",
  },
  {
    name: "Pumpkin Crystal Vase",
    price: 600,
    img: "./asset/img13.jpg",
  },
  {
    name: "Gold Drips 3set Vases",
    price: 1800,
    img: "./asset/img18.jpg",
  },
  {
    name: "Crystal Father Christmas Vase",
    price: 600,
    img: "./asset/img27.jpg",
  },
  {
    name: "Smoke Diamond Crystal Vase",
    price: 500,
    img: "./asset/img21.jpg",
  },
  {
    name: "6 Coaster Blue Bamboo Set",
    price: 600,
    img: "./asset/img1.jpg",
  },
  {
    name: "Pumpkin Hand Painted Crystal",
    price: 400,
    img: "./asset/img2.jpg",
  },
  {
    name: "Bamboo Wood Teal Table Coaster",
    price: 450,
    img: "./asset/img4.jpg",
  },
  {
    name: "Bamboo Natural Brown",
    price: 500,
    img: "./asset/img5.jpg",
  },
  {
    name: "White Natural Brown Bamboo Coaster",
    price: 500,
    img: "./asset/img7.jpg",
  },
  {
    name: "Wood Boat Holder",
    price: 600,
    img: "./asset/img8.jpg",
  },
  {
    name: "Recycled Plantain Pillows",
    price: 200,
    img: "./asset/img9.jpg",
  },
  {
    name: "Coconut Carved Pourei Holder",
    price: 600,
    img: "./asset/img11.jpg",
  },
  {
    name: "Wood Hanging Carved Hanging",
    price: 600,
    img: "./asset/img12.jpg",
  },
  {
    name: "Crystal Vase Table Display",
    price: 600,
    img: "./asset/img15.jpg",
  },
  {
    name: "2Set Candle Holder",
    price: 2000,
    img: "./asset/img17.jpg",
  },

  {
    name: "Coconut Carved Pourei Holder",
    price: 600,
    img: "./asset/img19.jpg",
  },
  {
    name: "Candle Holder",
    price: 1000,
    img: "./asset/img20.jpg",
  },

  {
    name: "Coconut Carved Pourei Holder",
    price: 250,
    img: "./asset/img22.jpg",
  },
  {
    name: "4set Soap Dish Caddy Holders",
    price: 600,
    img: "./asset/img23.jpg",
  },
  {
    name: "Coconut Infused Christmas Candles",
    price: 250,
    img: "./asset/img24.jpg",
  },
  {
    name: "3set Emerald Crystal Calabash",
    price: 600,
    img: "./asset/img25.jpg",
  },
  {
    name: "",
    price: 900,
    img: "./asset/img26.jpg",
  },

  {
    name: "Christmas Tree Wood Door",
    price: 500,
    img: "./asset/img28.jpg",
  },
  {
    name: "Deer Head",
    price: 400,
    img: "./asset/img29.jpg",
  },
  {
    name: "Christmas Wood Carves",
    price: 400,
    img: "./asset/img30.jpg",
  },
  {
    name: "Center Table Wood Canister",
    price: 600,
    img: "./asset/img31.jpg",
  },
  {
    name: "Jute Basket Holder",
    price: 1000,
    img: "./asset/img32.jpg",
  },
  {
    name: "Christmas Raffi Basket",
    price: 500,
    img: "./asset/img33.jpg",
  },
  {
    name: "Basket Bags",
    price: 600,
    img: "./asset/img34.jpg",
  },
  {
    name: "Christmas Weave Basket",
    price: 350,
    img: "./asset/img35.jpg",
  },
  {
    name: "Crystal Jewellery Table Boxes",
    price: 400,
    img: "./asset/img36.jpg",
  },
  {
    name: "Crystal Case Holder",
    price: 400,
    img: "./asset/img37.jpg",
  },
  {
    name: "Half Moon Case",
    price: 300,
    img: "./asset/img38.jpg",
  },
  {
    name: "Wood Holder for Pourri",
    price: 250,
    img: "./asset/img39.jpg",
  },
  {
    name: "Rabbit Wood Holder",
    price: 300,
    img: "./asset/img40.jpg",
  },
  {
    name: "Bird Carved Wood Hanging",
    price: 300,
    img: "./asset/img41.jpg",
  },
  {
    name: "Christmas Weave Basket",
    price: 350,
    img: "./asset/img42.jpg",
  },
];


const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
   if(window.scrollY > 0){
      header.classList.add('fixed')
   } else {
      header.classList.remove('fixed')
   }
})


let productDisplay = products.map((product) => {
   console.log(product)
 return `
   <div class="single_image">
      <div class="image">
      <img src="${product.img}" alt="">
      </div>
      <div class="details">
      <p>${product.name}</p>
      <span>Price: <small>GHC ${product.price}</small></span>
      </div>
   </div>
   `;
})

productDisplay = productDisplay.join('')
console.log(productDisplay)
document.querySelector('.single_image_container').innerHTML = productDisplay;