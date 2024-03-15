let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let heading=document.getElementById("one");
heading.innerHTML=recipeObj.title;
let photo =document.getElementById("photo");
photo.src=recipeObj.imgSrc;
for(let i of recipeObj.ingredients){
    
let list=document.getElementById("ingredients");
let items=document.createElement("li");
list.appendChild(items);
items.innerHTML=i;
}
