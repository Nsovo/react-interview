

export function countByKey (arr, key) {
const items =[]
	let brand =''
			Array.from(new Set(arr)).map((item,i) =>{
				if(item.brand != brand)
					items.push({brand:item.brand,count:i})

				brand =item.brand
			})
	return items.reverse()
}