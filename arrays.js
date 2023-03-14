//Find the last element of the following arrays
arr1 =[3,7,34,90,12]
arr2 = [true,"green","where",12,56]
console.log();
console.log(arr2.length-1);


//Write a js program that will join the following array elements into a string
myPets =["Cow","Bird","snake","Dog"];
console.log(myPets.join('-'));

//Write a Js script to sort the following array items
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

//Write a program to remove duplicates from the following array.Console the array without duplicates,and console another array that only contain the duplicates

var arr = ["apple","mango","apple","orange","mango","mango"];
 let unique =[];
 arr.forEach((x)=>{
    if(!unique.includes(x)){
        unique.push(x)
    }
 });
 console.log(unique);
 console.log();


 //write a JS script to search for the following wordin the array.If the word is present,console it else console"The search word was not found"
 let arr5 = ["the","way","x",4];
 let wordfind = "we";
 if (arr5.includes(wordfind)) {
    console.log(wordfind)
 } else {
    console.log("the search was not found");
    
 }


 //write a js script to sort the following string
 let word ="sevink";
 let sorted = word.split('') .sort() .join('')
 console.log(sorted);
