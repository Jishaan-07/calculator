// display content in  calculator screen
function displayContent(content){
    result.value += content
}
// clear screen calculator
function calScreenClear(){
    result.value=""
}
// calculation
function calOutput(){
   result.value= eval(result.value)
}
// removing last digit
function removeLastDigit(){
result.value= result.value.slice(0,-1)
}