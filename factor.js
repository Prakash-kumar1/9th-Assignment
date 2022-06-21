// Print Factorial number program
let b = 3 ;
let i = parseInt(process.argv[2]) ;
if (b == 0 || b == 1){
    console.log(b);
    }else{
     for(let i = b ; i >=1; i--){
        b = b * i ;
     }   
console.log(b);
   }
             



