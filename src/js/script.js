function lampOn() {
 const btn = document.getElementById("btn");
 const toogle = document.getElementById("toogle");
 const body = document.body;
 const lamp = document.getElementsByTagName("img")[0];
 const info = document.getElementById("on");
 btn.addEventListener("click", () => {
   toogle.classList.toggle("toogleOn");
   body.classList.toggle("darkmode");
   setTimeout(() => {
     body.className === "darkmode" ? lamp.setAttribute("src", "/asets/imgs/lampOn.png") : lamp.setAttribute("src", "/asets/imgs/lampOff.png");
   }, 200);
 });
}
lampOn();