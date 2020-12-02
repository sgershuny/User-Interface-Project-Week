// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader(sticky) {
    sticky.style.position = "fixed";
    sticky.style.top = "0";
    sticky.style.width = "100%";
    sticky.style.zIndex= "10";
  }
// When the user scrolls the page, execute myFunction
function menuOpen(burger,header,dropdownMenu) {
//opens a full page menu and change hamburger for X
  if(burger.classList[0] === "burger"){
    burger.classList.add("x");
    burger.classList.remove("burger");
    dropdownMenu.style.height = "100%";
    dropdownMenu.style.opacity = "0.8";
    dropdownMenu.style.backgroundColor = "#98a4af";
    dropdownMenu.style.wid = "#98a4af";
    dropdownMenu.style.position = "fixed";
    dropdownMenu.style.top = "0";
    dropdownMenu.style.width = "100%";
    dropdownMenu.style.zIndex= "9";

    header.after(dropdownMenu);

    burger.style.height = "25px";
    burger.src = "img/nav-hamburger-close.png";
    


  }
  else{
    burger.classList.add("burger");
    burger.classList.remove("x");
    header.style.height = "auto";
    header.style.opacity = "1";
    burger.style.height = "auto";
    burger.src = "img/nav-hamburger.png";

    dropdownMenu.remove()

  }
}

// Get the header
header = document.querySelector(".banner");

// Get the offset position of the navbar
//var sticky = header.offsetTop; event.target.style....
console.log(window.pageYOffset);
console.log(header.offsetTop);
header.addEventListener("scroll",stickyHeader(header));

anchors = document.createElement("nav");
home = document.createElement("a");
services = document.createElement("a");
contact = document.createElement("a");

homeTxt = document.createTextNode("Home");
servTxt = document.createTextNode("Services");
contTxt = document.createTextNode("Contact");

home.appendChild(homeTxt);
services.appendChild(servTxt);
contact.appendChild(contTxt);

anchors.appendChild(home);
anchors.appendChild(services);
anchors.appendChild(contact);

home.href = "index.html";
services.href = "services.html";
contact.href = "#";

anchors.style.display = "flex";
anchors.style.flexDirection = "column";
anchors.style.marginTop = "19%";
anchors.style.marginLeft = "37%";
anchors.style.fontSize = "4rem";
anchors.style.lineBreak = "22px";
anchors.style.lineHeight = "5rem";

atags = anchors.querySelectorAll("a")

atags.forEach(function(tag){
  tag.style.textDecoration = "none";
  tag.style.color = "white";
  tag.addEventListener("mouseenter",(event)=>{
    event.target.style.color = "#504545";
  })
  tag.addEventListener("mouseleave",(event)=>{
    event.target.style.color = "white";
    if(window.location.href === event.target.href){
      event.target.style.color ="#504545";
    }
  })
  if(window.location.href === tag.href){
    tag.style.color ="#504545";
  }
})


dropdownMenu = document.createElement("div");
dropdownMenu.appendChild(anchors);

burger = document.querySelector("img");
burger.addEventListener("click",(event) => {
  menuOpen(event.target,header,dropdownMenu)});




