/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let divider = input.match(/[/]/g)
    let charSearch = input.match(/[^A-Za-z]/g)
    let endOfNums 
    if (charSearch == null ) endOfNums = 0
    else{endOfNums = charSearch.length}

    //console.log("divider : " + divider)
    if( !divider) {
      result = input.slice(0, input.search(/[A-Za-z/]/))
      if(input.search(/[A-Za-z/]/)==0) result = 1
      //console.log("result : " + result)
    } else if (divider.length == 1){
      let div = input.indexOf('/')
      let firstNum = parseFloat(input.slice(0, div))   
      let secNum  = parseFloat(input.slice(div +1, endOfNums ))
      result = firstNum/secNum
      //console.log("result : " + result)  
    } else{result = 'invalid number'}
    return result
  };
  
  this.getUnit = function(input) {
    let regexSearch = input.slice(input.search(/[A-Za-z]/))
    if(['gal', 'L', 'lbs', 'kg', 'mi', 'km'].indexOf(regexSearch) < 1 ) result = 'invalid unit'
    else result = regexSearch
    return result
  };
    
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit == 'gal') result = "L"
    else if(initUnit == 'L') result = "gal"
    else if(initUnit == 'lbs') result = "kg"
    else if(initUnit == 'kg') result = "lbs"
    else if(initUnit == 'mi') result = "km"
    else if(initUnit == 'km') result = "mi"
    else (result = 'invalid unit')

    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if(initUnit == 'gal') constant = galToL
    else if(initUnit == 'L') constant = 1/galToL
    else if(initUnit == 'lbs') constant = lbsToKg
    else if(initUnit == 'kg') constant = 1/lbsToKg
    else if(initUnit == 'mi') constant = miToKm
    else if(initUnit == 'km') constant = 1/miToKm
    else(constant = 0)

    var result = initNum * constant
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum.toString() + ' ' + initUnit.toString() +' converts to '+returnNum.toFixed(5).toString()+' '+returnUnit.toString()
    
    return result;
  };
  
}

module.exports = ConvertHandler;
