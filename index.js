

var arr = [3,5,9,10,11,14,20,25,33];
var arr1 = []


for(i in arr){
  if (arr[i]%5== 0){
    // console.log(arr[i])
    arr1[arr1.length] = arr[i]
  }
}
console.log(arr1)


var arr = ["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"]

var arr1 = []

for (i in arr){
    if (arr[i][arr[i].length-1] == arr[i][arr[i].length-1].toUpperCase())
   {
    arr1[arr1.length] = arr[i]
   }
}

console.log(arr1)

var arr = ["htMl","css","Js","react","angulaR"]

var arr1 = [];

for(i in arr){
  if([i]%2==0){
    arr1[arr1.length] = arr[i]

  }
} console.log(arr1)



