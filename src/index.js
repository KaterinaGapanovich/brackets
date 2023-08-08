module.exports = function check(str, bracketsConfig) {

  let myBrackets = bracketsConfig.join('').replace(/,/g, '');
        let bunch = [];

    for (let bracketOne of str) {
            let bracketsIndex = myBrackets.indexOf(bracketOne)

            if (bracketsIndex % 2 === 0) {
                
                if (bracketOne === myBrackets[bracketsIndex + 1] && bunch[bunch.length - 1] === bracketsIndex){ bunch.pop();
                } else if (bracketOne === myBrackets[bracketsIndex + 1] && bunch[bunch.length - 1] !== bracketsIndex) {
                    bunch.push(bracketsIndex)
                }
                else{ bunch.push(bracketsIndex)
                }
            } 
            else {
                if (bunch.pop() !== bracketsIndex-1){
                    return false;
                }
            }
        }
        return bunch.length === 0;
        
}
