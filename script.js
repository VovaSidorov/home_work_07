var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
			   {"name":"Home","href":"index.html"},
			   {"name":"Login","href":"login.html"},
               {"name":"Catalog","href":"catalog.html"},
               {"name":"Add item","href":"additem.html"},
               {"name":"About us","href":"about_us.html"},
               {"name":"Contacats","href":"contacts.html"},
               {"name":"Portfolio","href":"portfolio.html"},
               {"name":"Blog","href":"blog.html"}
             ];

for (var i=0;i<names.length;i++){
li = document.createElement("li");
a = document.createElement("a");
a.innerHTML = names[i].name;
a.setAttribute("class","nav-link");
a.setAttribute("href", names[i].href);
li.setAttribute("class","nav-item")
li.appendChild(a);
navigation.appendChild(li);

if (document.location.href.indexOf(names[i].href) != -1){
  document.getElementsByClassName("nav-item")[i].setAttribute("class","active");
}
}
////////////////////////////////////
const  products = [
	{"name": "Snikers #1", "price": 103.50, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #2", "price": 152.14, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #3", "price": 202.22, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #4", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #5", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #6", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	
	{"name": "Snikers #7", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #8", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "LeBron 16 #9", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #11", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #12", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
  
	{"name": "Snikers #13", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #14", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #15", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #16", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
];
	
let  per_page = 6;
let current_page = 0;

let minmax_button = document.getElementById("minmax");
let maxmin_button = document.getElementById("maxmin");
let inorder_button = document.getElementById("inorder");
let pagination = document.getElementById("pagination");
var paginations_buttons = document.getElementsByClassName("page-link");	
const search_button = document.getElementById("search");
let s = document.getElementById("s");
///////////////

function createPagination(array_products){
	let link, li, ul;

   let classNameLi = "page-item";

	pagination.innerHTML="";
	ul = createNewElement("ul", null, "pagination");
	for(let i = 0; i < Math.ceil(array_products.length / per_page); i++){
		link = createNewElement("a", i+1, "page-link",[{"name":"data-link", "value":i}]);

		classNameLi =(i==current_page)?"page-item active":"page-item"; 
        li = attachChilderToParent(createNewElement("li", null, classNameLi),[link]);
		ul.appendChild(li);
	}

	pagination.appendChild(ul);
	
	Array.from(paginations_buttons).map((el)=>{
		el.addEventListener("click",(e)=>{
			current_page = e.target.dataset.link;	
			renderProducts(array_products);
		
		});
	});

	Array.from(document.getElementsByClassName("product_more")).map((el)=>{
		el.addEventListener("click",eventHandle,false);	
	});
}
	
	const eventHandle =	(e)=>{
			e.preventDefault();
			e.stopPropagation();
		  console.log(e.target);
		  const modal = document.getElementById("product_more");
		  modal.style.display = "block";
		  modal.setAttribute("class","modal fade show");
		  console.log("Privet");	
		}



function createNewElement(tag, innerContent=null, classStr=null, attr=null){
	var el = document.createElement(tag);
	el.innerHTML = (innerContent)?innerContent:"";
	el.className = (classStr)?classStr:"";

	if(attr){
		attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
		
	}

	return el;
}
function createQuantityOfGoods(){
	var p = createNewElement("p","There are "+products.length+" products in this section." ,"colend");
	var p1 = attachChilderToParent(createNewElement("div",null,"colend"),[p]);
	return p1;
}

function createCard(product,index){	 
   var description = createNewElement("a", "Description", "btn btn-primary product_more  mr-2 my-2",[{"name":"href", "value":"#"},{"name":"data-id", "value":index}]);
	var link = createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href", "value":"#"}]);
	var p = createNewElement("p", product.description, "card-text");
	var price = createNewElement("p", product.price, "card-text");
	var title = createNewElement("h5", product.name, "card-title");

	var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [title,p,price,description,link]);

	var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);

	var card = attachChilderToParent(createNewElement("div", null, "card"), [image,cardBody]);

	var catalogItem = attachChilderToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

	return catalogItem;
}
// <!-- <div class="modal-dialog" role="document">
// <div class="modal-content">
//   <div class="modal-header">
// 	<h5 class="modal-title">Product</h5>
// 	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
// 	  <span aria-hidden="true">&times;</span>
// 	</button>
//   </div>
//   <div class="modal-body">
// 	<div class="col-12"><img class="w-100" src="images/bg-01.jpg" alt=""></div>
// 	<div class="col-12">This is very cool snikers. Nice colorfull and quality</div>
//   </div>
//   <div class="modal-footer">
// 	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
// 	<button type="button" class="btn btn-primary">Buy</button>
//   </div>
// </div>
// </div> -->


function createDescription(products){	
   var h5 = createNewElement("h5",products.name,"modal-title");
   var span = createNewElement("span","&times;",null,[{"name":"aria-hidden","value":"true"}]);
   var button = attachChilderToParent(createNewElement("button",null,"close",[{"name":"type","value":"button"},{"name":"data-dismiss","value":"modal"},{"name":"aria-label","value":"Close"}]),[span]);
   var headerDescription = attachChilderToParent(createNewElement("div",null,"modal-header"),[h5,button]);
   
   var img = createNewElement("img",null,"w-100",[{"name":"src","value":"images/"+products.image}]);
   var divImage = attachChilderToParent(createNewElement("div",null,"col-12"),[img]);
   var divDescription = createNewElement("div",products.description,"col=12");
   var midddleDescription = attachChilderToParent(createNewElement("div",null,"modal-body"),[divImage,divDescription]);

   var buttonClose = createNewElement("button","close","btn btn-secondary",[{"name":"type","value":"button"},{"name":"data-dismiss","value":"modal"}]);
   var buttonAddToCard = createNewElement("button","Add to Cart","btn btn-primary",[{"name":"type","value":"button"}]);
   var footerDescription = attachChilderToParent(createNewElement("div",null,"modal-footer"),[buttonClose,buttonAddToCard]);

   var modalDialog = attachChilderToParent(createNewElement("div",null,"modal-content"),[headerDescription,midddleDescription,footerDescription]);

   var modalDescription = attachChilderToParent(createNewElement("div",null,"modal-dialog",[{"name":"role","value":"document"}]),[modalDialog]);
   console.log(modalDescription);
   return modalDescription;
}


// console.log(createDescription(products));

function attachChilderToParent(html, array_el){
	array_el.map((el)=>html.appendChild(el));
	return html;
}

var catalog = document.getElementById("catalog");


function startFromFirstProducts(){
	return current_page*per_page; 
}

function isLastProductInPage(i, array_products){
	return  i<current_page*per_page + per_page && i <array_products.length;
}

 
function renderProducts(array_products){
	catalog.innerHTML="";
 for (var i=startFromFirstProducts();isLastProductInPage(i,array_products); i++){
	catalog.appendChild(createCard(array_products[i],i));
	// catalog.appendChild(createDescription(array_products[i]));
	
 }
 createPagination(products);
}

function sortProductsMinToMax1(a, b) {
    return a - b;
  }

function sortProductsMaxToMin1(a, b) {
    return b - a;
  }  

function sortProductsMinMax(){
	let i,j;
	var arrMinToMax = [];
	let productsPrice = products.map(products=> {
		return products.price;
	});
	var sortProductsMinToMax = productsPrice.sort(sortProductsMinToMax);
	for (i=0;i<sortProductsMinToMax.length;i++){
		for (j=0;j<products.length;j++){
			if (sortProductsMinToMax[i]==products[j].price){
				// console.log(products[j])
				arrMinToMax.push(products[j]);
			}
		}
	}
	return arrMinToMax;
}

function sortProductsMaxMin(){
	let i,j;
	var arrMaxToMin = [];
	let productsPrice = products.map(products=> {
		return products.price;
	});
	var sortProductsMaxToMin = productsPrice.sort(sortProductsMaxToMin1);
	
	
	for (i=0;i<sortProductsMaxToMin.length;i++){
		for (j=0;j<products.length;j++){
			if (sortProductsMaxToMin[i]==products[j].price){
				//  console.log(products[j]);
				 arrMaxToMin.push(products[j]);
			}
		}
	}
	return arrMaxToMin;
}

function filterAndRenderProducts(){
	let search_products = [];
	// let searchPhrase;
	const reg = new RegExp(s.value);
	search_products  = products.filter((el)=>reg.test(el.name) || reg.test(el.description));
	console.log(search_products.length);
	current_page = 0;
	let z = s.value;
	searchPhrase.innerHTML = "You searched \"" + s.value + "\" results found " + search_products.length;
	s.value = "";
	console.log(z);
	renderProducts(search_products);
	createPagination(search_products);

}

search_button.addEventListener("click",(e)=>{
	filterAndRenderProducts();
});

s.addEventListener("keypress",(e)=>{
 if (e.keyCode == 13){
	filterAndRenderProducts();
 }
});

minmax_button.addEventListener("click",(e)=>{
	renderProducts(sortProductsMinMax());
	createPagination(sortProductsMinMax());
	var el = document.getElementById("dropdownMenuButton");
	el.firstChild.data = "Min max";
});
maxmin_button.addEventListener("click",(e)=>{
	renderProducts(sortProductsMaxMin());
	createPagination(sortProductsMaxMin());
	var el = document.getElementById("dropdownMenuButton");
	el.firstChild.data = "Mix min";
});	
inorder_button.addEventListener("click",(e)=>{
	renderProducts(products);
	createPagination(products);
	var el = document.getElementById("dropdownMenuButton");	 
	el.firstChild.data = "In order";

});	


var colElements = document.getElementById("colProducts");
colElements.appendChild(createQuantityOfGoods());

renderProducts(products);
createPagination(products);
// createDescription(products);




