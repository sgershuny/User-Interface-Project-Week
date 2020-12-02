
tabs = document.querySelector(".tab-buttons").querySelectorAll("a");
//All tab buttons selected.

tabContent = document.querySelectorAll(".tab-content")

tabContent[0].style.display ="none";
tabContent[2].style.display ="none";
tabContent[3].style.display ="none";

function selected(tab){
    tab.style.backgroundColor = "teal";
    tab.style.color = "white";
}

function unselected(tab){
    tab.style.backgroundColor = "white";
    tab.style.color = "black";
}

selected(tabs[1]);

tabs.forEach(tab => {
    tab.addEventListener("click",(event)=>{
        tabs.forEach((tab) => {unselected(tab)});
        tabContent.forEach((tab) => {
            tab.style.display ="none";});
        selected(event.target);
        //dataset.tab === X
        tabContent.forEach((tab)=>{
            tab.style.display = "none";
        })
        tabContent[event.target.dataset.tab].style.display = "flex";
    })
})