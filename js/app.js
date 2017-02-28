var shoppingList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, image: "https://ae01.alicdn.com/kf/HTB1Yq_sJFXXXXaNXVXXq6xXFXXXN/Hot-Selling-Super-Soft-Pet-font-b-Finger-b-font-font-b-Toothbrush-b-font-Teddy.jpg"}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/TGS80s.BM.jpg/220px-TGS80s.BM.jpg"}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, image: "https://i.ytimg.com/vi/NKn43NdcPAs/maxresdefault.jpg"}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, image: "https://img.grouponcdn.com/deal/3Y1jtoWL9tQwmTvziL88G1BTtASG/3Y-1000x600/v1/c700x420.jpg"}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, image:"http://e-catalog.rusbiz.com/user_images/en/prod_picture/148256491045b99fdc9ffc7.jpg"}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, image: "http://cdn.bigsale.sg/deals/images/deals/5015/boyfriend-hug-me-pillow-keep-loneliness-arms-length-away_1-deal.jpg"}];

//var itemRow = document.getElementByID("itemsList");

function addItem(itemNumber, imgLink, itemName, itemDesc,itemPrice) {

		var itemRowDiv = document.createElement("div");
	itemRowDiv.className = "row item";

	var itemPicDiv = document.createElement("div");
	itemPicDiv.className = "col-sm-2";
	itemPicDiv.id = "imgClass";

	var itemInfoDiv = document.createElement("div");
	itemInfoDiv.className = "col-sm-8";

	var itemPriceDiv = document.createElement("div");
	itemPriceDiv.className = "col-sm-2";

	var addImg = document.createElement("IMG");
	addImg.src = imgLink;
	addImg.height = "100";

	var addItemName = document.createElement("h3");
	addItemName.innerHTML = itemName;

	var addItemInfo = document.createElement("p");
	addItemInfo.innerHTML = itemDesc;
	addItemInfo.class = "description";
	addItemInfo.style.display = "none";

	var addItemPrice = document.createElement("h3");
	addItemPrice.innerHTML = itemPrice;
	addItemPrice.className = "pricesOfItem";

	itemsList.appendChild(itemRowDiv);

	itemRowDiv.appendChild(itemPicDiv);
	itemPicDiv.appendChild(addImg);

	itemRowDiv.appendChild(itemInfoDiv);
	itemInfoDiv.appendChild(addItemName);
	itemInfoDiv.appendChild(addItemInfo);

	itemRowDiv.appendChild(itemPriceDiv);
	itemPriceDiv.appendChild(addItemPrice);
}



addItem(0, shoppingList[0].image ,shoppingList[0].product, shoppingList[0].description, shoppingList[0].price);
addItem(1, shoppingList[1].image ,shoppingList[1].product, shoppingList[1].description, shoppingList[1].price);
addItem(2, shoppingList[2].image ,shoppingList[2].product, shoppingList[2].description, shoppingList[2].price);
addItem(3, shoppingList[3].image ,shoppingList[3].product, shoppingList[3].description, shoppingList[3].price);
addItem(4, shoppingList[4].image ,shoppingList[4].product, shoppingList[4].description, shoppingList[4].price);
addItem(5, shoppingList[5].image ,shoppingList[5].product, shoppingList[5].description, shoppingList[5].price);

var totalPrice = document.createElement("h2");
var totalNum = 0;
for (var i = 0; i < shoppingList.length; i++){
	totalNum += shoppingList[i].price;
}
totalPrice.innerHTML = totalNum;

subTotal.appendChild(totalPrice);


var menuElem = document.getElementsByClassName("item");

for(var i =0; i<menuElem.length; i++){
  menuElem[i].addEventListener("click", printDesc);
}

function printDesc(){
	if (this.childNodes[1].childNodes[1].style.display === "none"){
		this.childNodes[1].childNodes[1].style.display = "block";
	} else {
		this.childNodes[1].childNodes[1].style.display = "none";
	}
}

