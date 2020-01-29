function play(user,computer){
    const array = ["paper", "rock", "scissors"];
   
    computer = array[Math.floor(3 * Math.random())]; 
      console.log("computer Choice :" , computer)
   
    user = array[Math.floor(3*Math.random())]; 
      console.log("user Choice :" , user)
    
    
    if(user == computer ) {
      console.log("Egalitate") 
      
    } else if((user == array[0]  && computer == array[1]) || (user == array[1] && computer == array[2]) || (user === array[2] && computer === array[0])) {
      console.log("user wins!")
    }else {
      console.log("computer wins!")
    }
    
  }
  play();