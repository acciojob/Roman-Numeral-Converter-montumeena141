function convertToRoman(num) {
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
	
  let result = "";

	for(let i=0; i<romanSymbols.length; i++){
		let symbol=romanSymbols[i][0];
		let value=romanSymbols[i][1];

		while(num>=value){
			num=num-value; //reduce value
			result=result+symbol;
		}
		
	}
	return result;
	
  // for (let [symbol, value] of romanSymbols) {
  //   while (num >= value) {
  //     result += symbol;
  //     num -= value;
  //   }
  // }
//   return result;
}
// do not edit below this line
module.exports = convertToRoman