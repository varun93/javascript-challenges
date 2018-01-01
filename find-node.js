
const findNode = (tree,value) => {
		
    let found = false ;
	 
    if (tree.value === value) {
 			 return true;
    }

		 for(var index=0;index< tree.children.length;index++)  {
    	  const element = tree.children[index];
        found = findNode(element,value);
   			if(found){
					break;
				}
   };
    
   return found;
}


/* example tree

   let tree = {
    name: 'A',
    value: 4,
    children: [
        {
            name: 'B', value: 7,
            children: [{name: 'C', value: 9, children: []}]
        },
        {
            name: 'D', value: 11,
            children: [{name: 'E', value: 9, children: []}]
        },
        {name: 'F', value: 55, children: []},
        {
            name: 'G', value: 65,
            children: [
                {name: 'H', value: 21, children: []},
                {name: 'I', value: 33, children: []}
            ]
        }
    ]
}; */
