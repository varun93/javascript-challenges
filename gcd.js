const euclideanGCD = (a,b) => {
		
	if(b > a){
  	a = a ^ b;
    b = a ^ b;
    a = a ^ b;
  }
  
  if(b === 0){
	  return a;
  }

  return euclideanGCD(b,a%b);
  
}

const gcd = (a,b) => {
  
  if(a === 0) return b;
  if(b === 0) return a;
  
	for(let i = Math.min(a,b)>>1; i >= 1; i--){
  	if(a%i === 0  && b%i === 0)  return i;
  }

}
