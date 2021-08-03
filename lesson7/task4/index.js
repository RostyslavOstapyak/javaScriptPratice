const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  let resultArr = allStudentsList.slice();
  studentsForRetake.forEach(() =>{
    resultArr.splice(1,1)
    return resultArr;
  })
  console.log(resultArr)
  resultArr.forEach((name,index)=>{
    resultArr[index]=`Good job, ${name}`;
  })
  console.log(resultArr);
  return resultArr;
}; //this one is wrong solution self made

//example 1:

//input:
const allStud = ["a", "b", "c", "d"];
const retakeStud = ["b", "d"];

getMessagesForBestStudents(allStud, retakeStud);

//output:
//['Good job, a', 'Good job, c']
