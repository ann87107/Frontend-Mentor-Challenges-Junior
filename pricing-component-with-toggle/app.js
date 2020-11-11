const toggleBtn = document.querySelector(".p-s__toggle--method").children[2];
const prices = document.querySelectorAll("h3");
      
toggleBtn.addEventListener("click", (e)=> {
   e.target.classList.toggle("annually");

   if(e.target.classList.contains("annually")) {
      prices[0].textContent = "$199.99";
      prices[1].textContent = "$249.99";
      prices[2].textContent = "$399.99";
   } else {
      prices[0].textContent = "$19.99";
      prices[1].textContent = "$24.99";
      prices[2].textContent = "$39.99";
   }
});