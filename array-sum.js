const findArraySum = (array,index,sum) => {
	
  if(index === array.length){
	  return sum;
  }
  
  let element = array[index];

  if(Array.isArray(element)){
  	element = findArraySum(element,0,0); 
	}
  
  sum += element;
	
  return findArraySum(array,index+1,sum);

}


/* 
example input
const array = [1,[11,42,[8, 1], 4, [22,21]]]; 
*/

