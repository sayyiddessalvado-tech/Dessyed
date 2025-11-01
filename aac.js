
 function myMortals() {
  
  let mind = document.getElementById("portals");
  
     if (mind) {
    
   mind.style.visibility = 'visible';
 
} else {
   
  console.error("Element with ID 'portals' not found.");
 


 document.getElementById("google-menu").addEventListener("click", myMortals); 
}
}


 function welcome() {
  
  let x = "Welcome to AAC College";
   
  let ride = document.getElementById("sect1"); // <-- give the correct ID here!
  
  if (ride) {
   
   ride.style.display = "none";
  
} else {
    
   console.warn("Element to hide not found. Please provide the correct ID.");
 
}
  
 let subEl = document.getElementById("sub");
  
  if (subEl) {
    
   subEl.innerHTML = x;
  
} else {
    
    console.error("Element with ID 'sub' not found.");
  
}
}