
const submithandler=(e)=>{
    e.preventDefault();
    
    validatePass();
    validateEmail();
    
    console.log(validateEmail());
    console.log(validateEmail());
     if (validateEmail()==true || validatePass==true)
     {
        document.getElementById("login_form").submit();
        alert("You are logged in successfully");
     }
     else{
         console.log("neverno")
     }


};

document.addEventListener("submit",submithandler,false);

function validatePass(){
    const password =  document.getElementById("exampleInputPassword1").value;
    let errorListPass = [];
    if(! isLowerCaseInPass(password)){
        errorListPass.push("Please enter a-z" );
    }
    if(! isUpperCaseInPass(password)){
        errorListPass.push("Please enter A-Z" );
    }
    if(! isNumberInPass(password)){
        errorListPass.push("Please enter 0-9" );
    }

    if (errorListPass.length > 0){
        const foo = document.getElementById("errorTextPassword");
        foo.innerHTML = errorListPass.join(" ");
        document.getElementById("exampleInputPassword1").classList.add("is-invalid");
    }
    else {
        document.getElementById("exampleInputPassword1").classList.remove("is-invalid");
        
    }
    // console.log(errorListPass);
}

function validateEmail(){
    const email =  document.getElementById("exampleInputEmail1").value;
    let errorListEmail = [];
    separeteEmail = email.split("@");
    if (separeteEmail.length!=2){
        errorListEmail.push("Invalid email" );
    }
    if (wrongSings(email)){
        errorListEmail.push("Wrong Sings" );
    }
    if (! dotInDomain(email)){
        errorListEmail.push("Wrong dot" );
    }
    if (errorListEmail.length > 0){
        const foo1 = document.getElementById("errorText");
        foo1.innerHTML = errorListEmail.join(" ");
        document.getElementById("exampleInputEmail1").classList.add("is-invalid");
    }   
    else {
        // document.getElementById("exampleInputPassword1").classList.remove("is-invalid");
        document.getElementById("exampleInputEmail1").classList.remove("is-invalid");
        return true;
        // document.getElementById("login_form").submit();
    }
    // console.log(errorListEmail);
}

function isLowerCaseInPass(pass){
    return /[a-z]/.test(pass);
}

function isUpperCaseInPass(pass){
    return /[A-Z]/.test(pass);
}
function isNumberInPass(pass){
    return /\d/.test(pass);
}

function wrongSings(email){
    // console.log(/[!#$%&'*+/=?^`{|}~]+(\.`{|}~]+)*/.test(email));
   return /[!#$%&'*+/=?^`{|}~]+(\.`{|}~]+)*/.test(email);
}
function dotInDomain(email){
    // console.log(/\./.test(email));
   return /\./.test(email);
}













// const submithandler=(e)=>{
//         e.preventDefault();
       
//         const email =  document.getElementById("exampleInputEmail1").value;
//         console.log(email);
    
//         let errorList = [];
    

//         separeteEmail = email.split("@");
//         console.log(separeteEmail);
//     console.log(separeteEmail.length);
//         if (separeteEmail.length!=2){
//             errorList.push("Invalid email" );
//         }
//         if (wrongSings(email)){
//             errorList.push("Wrong Sings" );
//         }
//         console.log(errorList);



//         function wrongSings(email){
//             console.log(/[!#$%&'*+/=?^`{|}~]+(\.`{|}~]+)*/.test(email));
//            return /[!#$%&'*+/=?^`{|}~]+(\.`{|}~]+)*/.test(email);
//         }
//         // if(! isLowerCaseInPass(password)){
//         //     errorList.push("Please enter a-z" );
//         // }
//         // if(! isUpperCaseInPass(password)){
//         //     errorList.push("Please enter A-Z" );
//         // }
//         // if(! isNumberInPass(password)){
//         //     errorList.push("Please enter 0-9" );
//         // }
    
//         // if (errorList.length > 0){
//         //     const foo = document.getElementById("errorTextPassword");
//         //     foo.innerHTML = errorList.join(" ");
//         //     document.getElementById("exampleInputPassword1").classList.add("is-invalid");
//         // }
//         // else {
//         //     document.getElementById("exampleInputPassword1").classList.remove("is-invalid");
//         //     document.getElementById("login_form").submit();
//         // }
    
//     };
    
// document.addEventListener("submit",submithandler,false);

// // let email = "VovaCdfgdfgdfgdivic@gmailco'm";
// // z = email.split("@");
// // moreTwoDogs();
// // pointInDomain();
// // dotAtTheBeginningOrEndOfTheName();

// // function moreTwoDogs(){
// //     if (z.length > 2){
// //         return console.log("have introduced more than 2 @");
// //     }
// // }

// // function pointInDomain(){
// //     if (z[1].length > 2){
// //         return console.log("Invalid domain");
// //     }
// // }

// // function dotAtTheBeginningOfTheName(){
// //     for (let i=0; i < z[0].length; i++){
// //         console.log(z[0][0]);
// //         if (z[0][0]==".")
// //         console.log("At the beginning of the name point")
// //     }
// //     for (let i=0; i < z[0].length; i++){

// //         console.log(z[0][z[0].length-1]);
// //         if (z[0].length==".")
// //         console.log("At the end of the name is a dot")
// //     }
    
// // }


// // console.log(/[!#$%&'*+/=?^`{|}~]+(\.`{|}~]+)*/.test(email));

// //    console.log(z)