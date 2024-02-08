/* Now, let's manipulate the arrays, adding or removing information. For that, create three new arrays, calledNameOfOriginalCopyArray, and do what is asked below in the copies of the original arrays;

Add an item number to the first array. Use console.log() to display the original and the copy;
Remove the last item from the second array. Use console.log() to display the original and the copy;
Remove the second item from the third array. Use console.log() to display the original and the copy; */

const array1 = [1, 2, 3];
const array2 = ["Pizza", "Hamburguer", "Pie"];
const array3 = [1, "Pizza", 4 > 3];

array1.push(4);
console.log(array1);

array2.pop();
console.log(array2);

array3.splice(1, 1);
console.log(array3);
