function uniqueCount (array){
  if(!Array.isArray(array)){
    return null
  }
  let newArr=[];
  array.forEach(element => {
    if(!newArr.includes(element)){
      newArr.push(element);
    }
  });
  return newArr.length

}