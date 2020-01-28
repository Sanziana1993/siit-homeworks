// ex1.
for(let i = 1; i < 21 ; i++){
    console.log(i);
} 


// ex 2.
 for(let i = 1; i<21 ; i++) {
    if(i % 2) {
        console.log(i);
    }
} 
 

// ex 3
  
function sumOfArray(array){
    let sum = 0 ;
    
    for(let i = 0; i < array.lenght ; i++ ){
        sum = sum + array[i]  ;
       
    }
    
return sum;
  
}
  
console.log(sumOfArray([1, 3, 5, 1]));

// ex 4
function maxOfArray(array) {
    let i = 0;
    let max = -Infinity;
    
    while(i < array.length) {
      if (max < array[i]) {
        max = array[i];
      }
      
      i++;
    }
    
    return max;
  }
  
  console.log(maxOfArray([4, 15, -20, -1]));


// ex 5

function ElementsOfArray (array , value) {
    let n = 0 ;

    for(let i = 0 ; i <  array.lenght ; i++) {
        if(array[i] == value) {
            n++ ;
        }
    }
    return n;
}
console.log(ElementsOfArray([1,2,3,1,2,1] , 1 ))
   

// ex Expert Challenge:



  