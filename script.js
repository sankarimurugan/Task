// let arrow = document.querySelectorAll(".arrow");
// console.log(arrow);
// for(var i =0;i<arrow.length;i++){
//     arrow[i].addEventListener()("click",(e)=>{
//         console.log(e);
//         let arrowParent = e.target.parentElement.parentElement;
//         console.log(arrowParent);
//         arrowParent.classList.toggle("showMenu");
//     })
// }

// function fun(){
// let arrow1 = document.querySelector('.sub-menu');
// document.querySelector('#arrow').onclick = ()=>{
//     arrow1.classList.toggle('active');
// }
// }

function fun() {
    let submenu = document.querySelector('.sub-menu');
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}
function fun2() {
    let submenu = document.querySelector('#sub2');
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}
function fun3() {
    let submenu = document.querySelector('#sub3');
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}
function fun4() {
    let submenu = document.querySelector('#sub4');
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}

// let submenu1 = document.querySelector('.arrow2');
// if (submenu1.style.display === "none") {
//     submenu1.style.display = "block";
// } else {
//     submenu1.style.display = "none";

// }



// let a = document.getElementsByTagName("").innerHTML.value;



// rang slider
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value/2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});
// rang slider






// slide 2
// slide 2





// tags


// const ul = document.querySelector("ul"),
// input = document.querySelector("input"),
// tagNumb = document.querySelector(".details span");

// let maxTags = 10,
// tags = ["coding", "nepal"];

// countTags();
// createTag();

// function countTags(){
//     input.focus();
//     tagNumb.innerText = maxTags - tags.length;
// }

// function createTag(){
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//     });
//     countTags();
// }

// function remove(element, tag){
//     let index  = tags.indexOf(tag);
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
//     element.parentElement.remove();
//     countTags();
// }

// function addTag(e){
//     if(e.key == "Enter"){
//         let tag = e.target.value.replace(/\s+/g, ' ');
//         if(tag.length > 1 && !tags.includes(tag)){
//             if(tags.length < 10){
//                 tag.split(',').forEach(tag => {
//                     tags.push(tag);
//                     createTag();
//                 });
//             }
//         }
//         e.target.value = "";
//     }
// }

// input.addEventListener("keyup", addTag);

// const removeBtn = document.querySelector(".details button");
// removeBtn.addEventListener("click", () =>{
//     tags.length = 0;
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     countTags();
// });




