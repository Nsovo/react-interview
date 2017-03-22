/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey (arr, key) {
let items =[]
	let brand =''
			Array.from(new Set(arr)).map((item,i) =>{
				if(item.brand != brand)
					items.push({brand:item.brand,count:i})

				brand =item.brand
			})
	return items.reverse()
}