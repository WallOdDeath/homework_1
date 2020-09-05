var marketArray = [
    {
        title: "Пуэр",
        img: "img/puer.png",
        price:100,
        id:0,
        info: "Пуэ́р (кит. 普洱茶, пиньинь pǔ'ěrchá, буквально: «чай из Пуэра») — постферментированный чай. Отличается специфической технологией производства: собранные листья, обработанные до уровня зелёного чая, подвергаются процедуре микробной ферментации — естественному либо искусственному (ускоренному) старению.",
        count: 0
    },
    {
        title: "Улун",
        img: "img/ulun.png",
        price:200,
        id:1,
        info: "Улун, или цин ча — полуферментированный чай, который по китайской классификации занимает промежуточное положение между жёлтым и «красным». По классификации по степени ферментации ферментируется на 50 %",
        count: 0
    },
    {
        title: "Ассам",
        img: "img/assam.png",
        price:300,
        id:2,
        info: "Асса́м или асса́мский чай (Assam) — сорт чёрного крупнолистового чая, выращиваемого на северо-востоке Индии, в долине реки Брахмапутры, между Шиллонгом и Восточными Гималаями. В дикой природе растение может достигать высоты до 20 метров, но на плантациях ему не дают вырастать более 2 метров (для удобства сбора).ция о товаре",
        count: 0
    }
    ];
var basket = document.createElement("div");
document.querySelector("body").append(basket);
basket.className = "basket";
basket.id = 'basket';
basket.style.display = "flex";
basket.style.border = "1px solid black";
basket.style.justifyContent = "space-around";
var market = document.createElement("div");
document.querySelector("body").append(market);
market.className = "market";
market.style.display = "flex";
market.style.justifyContent = "space-around";

for(var good of marketArray){
    var product = document.createElement("div");
    market.appendChild(product);
    product.style.width = "30%";
    product.className = "product";
    var title = document.createElement("h2");
    product.appendChild(title);
    title.innerText = good.title;
    var newImg = document.createElement("img");
    product.appendChild(newImg);
    newImg.src = good.img;
    newImg.style.height = "300px"
    newImg.style.width = "300px";
    var info = document.createElement("p");
    product.appendChild(info);
    info.innerText =good.info;
    var price = document.createElement("span");
    product.appendChild(price);
    price.innerText ="Цена товара за 100 грамм: " + good.price;
    var button = document.createElement("button");
    product.appendChild(button);
    button.id = good.id+"_button";
    button.innerText = "Купить";
    button.style.display = "block";
}

function init (){
    var product = document.querySelectorAll("button");
    for (var i=0; i < product.length; i++){
        product[i].addEventListener('click', addInBasket)
    }
}

init();

function addInBasket (event) {
   var arrayClick = event.target.id; 
   var clickButton = arrayClick.split("_")[0];
   for ( var i=0; i<marketArray.length; i++){
       if(marketArray[i].id == clickButton){
           marketArray[i].count++;
           creatProductInBasket(clickButton,marketArray[i].count)
       }
   }
   creatTotal()
}

function creatProductInBasket(clickButton,clickCount, ){
    if (clickCount==1){
    var newBasket = document.getElementById("basket");
    var newBlock = document.createElement('div')
    newBasket.appendChild(newBlock);
    var title = document.createElement("h2");
    newBlock.appendChild(title);
    title.innerText=marketArray[clickButton].title;
    var price = document.createElement("p");
    newBlock.appendChild(price);
    price.innerText ="Цена товара за 100 грамм: " + marketArray[clickButton].price;
    var count = document.createElement("p");
    newBlock.appendChild(count);
    count.id=marketArray[clickButton].id+"count";
    count.innerText="Количество грамм: "+100*clickCount;
    var totalPrice = document.createElement("p");
    newBlock.appendChild(totalPrice);
    totalPrice.id=marketArray[clickButton].id+"totalPrice";   
    totalPrice.innerText="Итого: "+clickCount*marketArray[clickButton].price;
    
    } else if (clickCount>1) {
        document.getElementById(marketArray[clickButton].id+"count").innerText="Количество грамм: "+100*clickCount;
        document.getElementById(marketArray[clickButton].id+"totalPrice").innerText="Итого: "+clickCount*marketArray[clickButton].price;
    }
}

function creatTotal(){
    var marketTotalCount = 0;
    for (var i=0; i<marketArray.length; i++){
        marketTotalCount +=marketArray[i].count
    }
    if (marketTotalCount == 1){
        var newBasket = document.getElementById("basket");
        var newBlock = document.createElement('div')
        newBasket.appendChild(newBlock);
        newBlock.style.order ="1";
        var title = document.createElement("h2");
        newBlock.appendChild(title); 
        title.innerText="Итого к оплате";
        var price = document.createElement("p");
        newBlock.appendChild(price);
        price.id="price";
        price.innerText=totalPrice();
     } else { document.getElementById('price').innerText=totalPrice()}
}

function totalPrice(){
    var totalSum=0;
    for(var i=0; i<marketArray.length; i++){
        totalSum +=marketArray[i].count*marketArray[i].price 
    }
    return totalSum
}