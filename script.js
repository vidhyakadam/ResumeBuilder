function addNewWEField() {
    //  console.log("adding new field")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAdButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQ() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", "2");
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv

function generateCV() {

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //direct
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("adressfield").value;
    document.getElementById("linkdeinT").innerHTML = document.getElementById("link").value;
    document.getElementById("letoceT").innerHTML = document.getElementById("Letcode").value;
    document.getElementById("githubT").innerHTML = document.getElementById("Github").value;
    document.getElementById("objective").innerHTML = document.getElementById("Objective-field").value;

    document.getElementById("degree").innerHTML = document.getElementById("education").value;
    document.getElementById("skills").innerHTML = document.getElementById("skils").value;

    let wes = document.getElementsByClassName("weField");
    let str = '';
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    let aqs = document.getElementsByClassName("eqField");
    let str1 = '';

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;


    //code for setting profile image

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // set the image to templete
      console.log(reader.result);
      reader.onloadend = function () {
      document.getElementById("imgT").src = reader.result;

    }


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

//print cv 
function printCV() {
    window.print();
}

