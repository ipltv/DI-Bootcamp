let allBoldItems;


function getBoldItems(){
    allBoldItems = document.getElementsByTagName("strong");
}

function highlight(){
    for (let item of allBoldItems){
        item.style.color = "blue";
    }
}

function returnItemsToDefault(){
    for (let item of allBoldItems){
        item.style.color = "black";
    }
}

getBoldItems();
console.log(allBoldItems);

document.getElementsByTagName("p")[0].addEventListener("mouseover", highlight);
document.getElementsByTagName("p")[0].addEventListener("mouseout", returnItemsToDefault);