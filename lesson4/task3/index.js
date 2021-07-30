const m =2;
const n =20;

let result =0;

labelLoop: for(let i=m;i<=n;i++){

  if(i%5===0){
    console.log(i);
    continue labelLoop;
  }
  if(i%2===0 && i %4 === 0){ 
    result+=i;
    continue labelLoop;
  }
  if(i%3===0){
    result-=i;
    continue labelLoop;
  }
  if(i%4===0){
    result*=i;
    continue labelLoop;
  }



}