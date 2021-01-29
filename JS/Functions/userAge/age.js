
calculate =()=>{
    let age=document.getElementById("age").value;
let text;
    let decision =document.getElementById("decision");
  if(age<18){
    text =("too young");
  }
  else if(age>18&&age<27){
    text =("Right age for military services");
  }
  else if(age>27&&age<41){
    text =("You are reserved");
  }
  else if(age>41&&age<55){
    text =("You are backup reserved");
  }
  else if(age>55){
    text =("too aged");
  }
  decision.textContent=text;
}