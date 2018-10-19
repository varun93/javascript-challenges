const operators = {
    'asc': function(a, b) { return a < b ? 1 : a === b ? 0 :  -1; },
    'desc': function(a, b) { return a > b ? 1 : a === b ? 0 : -1 },
};


class Comparator{

	constructor(key,sort="asc"){
  	this.key = key;
    this.sort = sort;
  }
  
  compare(objA,objB){
  	const {key,sort} = this;
  	return operators[sort](objA[key],objB[key]);
  }

}

const find_by_key = (key, sort="asc", listOfMaps=[]) => {
		return listOfMaps.length ?  listOfMaps.reduce((result, current) => {
      const currentMin = result[key] || 0;
      const value = current[key] || 0;
      if(operators[sort](value,currentMin) !== -1){
      	result = current; 
      }
      return result;
	}) : {};
}

const min_by_key = (key,listOfMaps=[]) => {
	return find_by_key(key, "asc", listOfMaps=[])
}

// Question asked in one my interviews I won't mention which; the solution is simple but to get this abstraction is hard.
