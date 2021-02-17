 submit=(event)=> {
    event.preventDefault();
    
    let date1 = new Date(document.getElementById("date").value);
    let date2 = new Date();
    let Difference_In_Time = date1.getTime() - date2.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let text = document.querySelector("p");
    let eventName=document.getElementById("eventName").value;
     text.textContent= Difference_In_Days +" days left for " + eventName ;
   
  }
  let button = document.getElementById('button');
 button.addEventListener('click', submit);






