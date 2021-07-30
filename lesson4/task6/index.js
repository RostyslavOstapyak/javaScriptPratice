let sum=0;

for(let i=1;i<=1000;i++){
  sum+=i;
}
console.log(Math.trunc(sum/1234)>sum%1234);
console.log(sum/1234);
// and noone cares that sum%1234 brings resoult 730 while sum/1234 = 405.59157212317666
