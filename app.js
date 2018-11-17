var li, a, h1;
var navigation = document.getElementById("navigation");
var names = [
               {"name":"Home","href":"index.html"},
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
};

}

var addProducts = [
    {"name":"Name"},
    {"name":"Price"},
    {"name":"Image"},
    {"name":"Desription"}
  ];
  
  
  {/* <div class="form-group productitem">
  <label>Name</label>
  <input type="text" class="form-control">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div> */}
  
  function createNewElement(tag, innerContent=null,classStr=null,attr=null){
      var el = document.createElement(tag);
      el.innerHTML = (innerContent)?innerContent:""; 
      el.className = (classStr)?classStr:""; 
     if (attr){
         attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
     }
      return el;
  }
  
  function attachChildrenToParent(html, array_el){
      array_el.map((el)=>html.appendChild(el));
      return html;
  }
  
  function createNewProduct(addProducts){
      var input = createNewElement("input", "Add name", "form-control", [{"name":"type","value":"text"}]);
      var label = createNewElement("label",addProducts.name);
      // var textArea = createNewElement("textarea", "Add name", "form-control");
      var addProductBody = attachChildrenToParent(createNewElement(),[label,input]);
      
      // var formGroup = createNewElement("div", null,"form-group");
      // formGroup.appendChild(label);
      // formGroup.appendChild(input);		 
  
      return addProductBody;
  }
  
  
  var createProduct = document.getElementById("addproduct");	
  addProducts.map((el)=> createProduct.appendChild(createNewProduct(el)));
  
  // var htmlAddArray = addProducts.map((el)=> createNewProduct(el));
  // var createProduct = document.getElementById("addproduct");	
  // htmlAddArray.map((el)=>createProduct.appendChild(el));

