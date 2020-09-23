
let merch = [
  {
    id: 1,
    name: "White Dress",
    size: "L",
    color: "white",
    price: 1600,
    image: "product1.jpg",
    description: "Good looking white Dress",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpg",
    description: "Good looking Black Dress",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 1300,
    image: "product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 2300,
    image: "product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Red",
    price: 3500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Black Fusion Dress",
    size: "L",
    color: "Black",
    price: 4500,
    image: "product7.webp",
    description: "Good looking Black Fusion Dress",
  },
  {
    id: 8,
    name: "Black Sheath Dress",
    size: "M",
    color: "Black",
    price: 3500,
    image: "product8.webp",
    description: "Good looking Black Sheath Dress",
  },

  {
    id: 9,
    name: "Women laced Bra",
    size: "S",
    color: "Black",
    price: 900,
    image: "product9.jpg",
    description: "Good Looking Women laced Bra",
  },

  {
    id: 10,
    name: "Women Sport Bra",
    size: "M",
    color: "Yellow",
    price: 670,
    image: "product10.jpg",
    description: "Beautifull Women Sport Brar",
  },

  {
    id: 11,
    name: "Black Women Tank Top",
    size: "S",
    color: "Black",
    price: 5000,
    image: "product11.jpg",
    description: "Good looking Tank Top",
  },

  {
    id: 12,
    name: "Women Tshirt",
    size: "M",
    color: "White",
    price: 1250,
    image: "product12.jpg",
    description: "Good looking Traditional Dress",
  },



];
let cart=[];
 let count=0;
function displaymerch(merchd, type="main", place="card") {
    console.log(merchd);
    let strmerch = "";
    let arrmerch="";
    merchd.forEach(function (ele, index) {
        if(type=="main"){
            strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${"images/"+ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
        </p>
      </div>
      </div>`;
      arrmerch+=strmerch;
        }
        
    if(type=="cartd"){
                strmerch = ` <div class="productcardbg">
        <div class="image">
          <img src="${"images/"+ele.image}" width="100%" />
        </div>
        <div>
        <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
        <p>Size : ${ele.size}</p>
        <p>Color : ${ele.color}</p>
        <p>price : ${ele.price}</p>
        <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
        <p style="padding-top: 5px">
          <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
        </p>
      </div>
      </div>`;
            
        arrmerch += strmerch;    

        }
    });
    
document.getElementById(place).innerHTML = arrmerch;
    
}


function getProductByID(mercha, id) {
  return mercha.find(function (ele) {
    return ele.id == id;
  });
}
let flag=false;
function addToCart(id) {
flag=false;
  let item = getProductByID(merch, id);

  cart.forEach(function(element){
      if(element.id==item.id){
          flag=true;
          
      }
      

  })
  if (flag) {
      alert("Please \ndo not add the same product twice");
    return 0;
  }
  cart.push(item);
  count+=1;
  document.getElementById("numb").innerText=count;
  let type="cartd";
  let place="cartcard";
  displaymerch(cart, type, place);

}


function search(){
    console.log("calling");
}
function deletemerch(id){
  let item = getProductByID(merch, id);
  let index = cart.findIndex(function (item1) {
    return item1.id == id;
  });
  cart.splice(index, 1);
  count-=1;
   document.getElementById("numb").innerText = count;
   let type = "cartd";
   let place = "cartcard";
   displaymerch(cart, type, place);
}

function filter(){
    let minv=document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items= merch.filter(function(itemsl){
        return itemsl.price>=minv && itemsl.price<=maxv;
    })
     displaymerch(items);
    document.getElementById("minp").value="";
      document.getElementById("maxp").value="";
}

function search(){
    let str= document.getElementById("serstr").value;
    console.log(str);
    let items = merch.filter(function(ele) {
      return ele.name.indexOf(str)!=-1;
    });
    displaymerch(items);


}
displaymerch(merch);