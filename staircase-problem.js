const numWays = (N, paths=[], steps) => {
  if(N >= 0){
    if(N === 0){
			allPaths.push([0].concat(paths.reverse()));
			return;
    }
    else{
      for(let i=0; i < steps.length; i++){
    	  paths = paths.concat(N);
      	numWays(N-steps[i],paths,steps);
      	paths = paths.slice(0, paths.length - 1);
      }
    }
  }
}

const N  =  4;
const allPaths = [];
const steps = [1,2];
console.log(numWays(N,[],steps));
console.log(allPaths);
