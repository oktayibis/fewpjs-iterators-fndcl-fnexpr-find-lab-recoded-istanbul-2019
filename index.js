const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
  //...
]

function superbowlWin(obj){
  let results; 
  obj.find(function (a) {
    if(a.result === 'W'){
     results = a.year
    } 
  })
  return results
}