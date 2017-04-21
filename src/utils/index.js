

export function countByKey (arr, key) {
	var items =[];
	 arr.reduce(function(item,prev, cur) {

  				prev[cur] = (prev[cur] || 0) + 1;
  				items.push(prev);
 		 return items;
},  []);

	return items.sort();
}
