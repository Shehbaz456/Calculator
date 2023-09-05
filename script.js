
let input = document.querySelector('input') ;
let specialChars = ['%','+',')','DE','AC','*','/','=']
let output = "";

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
  if(e.target.innerHTML === '=' && output!== ""){ //34+2 =
      output = eval( output.replace('%',"/100")); 
      console.log(e.target);
      console.log(output);
      input.value =  output ;
    }
    else if(e.target.innerHTML === 'AC'){
      output = '';
      input.value =  output ;
    }
    else if(e.target.innerHTML === 'DE'){
      output  =  output.toString().slice(0,-1)
      input.value =  output ;
    }
    
    else{
      if(output === '' && specialChars.includes(e.target.innerHTML)) return;
      output = output + e.target.innerHTML;
      input.value =  output ;
  }
  })
})