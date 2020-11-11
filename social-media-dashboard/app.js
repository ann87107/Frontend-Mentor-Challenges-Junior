const checkbox = document.querySelector("input");
const htmlElement = document.documentElement;
   
checkbox.addEventListener("change", (e) => {
   if (checkbox.checked) {
      // smoothTrans();
      htmlElement.setAttribute("data-theme", "dark");
   } else {
      // smoothTrans();
      htmlElement.setAttribute("data-theme", "light");
   }
});

function smoothTrans(){
    htmlElement.classList.add("transition");
    window.setTimeout(()=>{
        htmlElement.classList.remove("transition");   
    }, 1000);
}