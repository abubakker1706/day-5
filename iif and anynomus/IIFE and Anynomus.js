//Print odd numbers in an array 
(()=>{
let a = [1,2,3,5,8,7,9];
for (let i=0;i<a.length;i++){
 if (a[i] % 2 !=0){
console.log(a[i]);
  }
                         }
                     })()
                     
                     
//Convert all the strings to title caps in a string array
(() => {
                         let a = "guvi tech deserves you"
                             .split(' ')
                             .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
                             .join(' ');
                         console.log(a);
                     })()
                     
                     //Sum of all numbers in an array
                     (()=>{
                         let a=[1,2,3,4,5];
                         let Sum=0;
                             for (let i=0;i<a.length;i++){
                             Sum+=a[i];}
                             console.log(Sum);
                     })()
                     
                     //Return all the prime numbers in an array
                     (() => {
                         var arr=[1,2,3,4,5,6,7];
                         var a=[];
                         const prime= function() {
                         for(var x of arr){
                         var b=0;
                         for(var i=2;i<=x/2;i++){ 
                         if(x%i==0){ 
                         b=1;
                         break;
                         }
                         }
                         if(b==0){
                         a.push(x)
                         }
                         }
                         return a
                         
                         }(arr)
                         console.log(prime);
                         })()
                     
                     //Return all the palindromes in an array
                     (()=>{
                         var a=["eye","madam","java"]
                         for(i=0;i<a.length;i++)
                         {
                             var b=a[i].split("").reverse().join("")
                             if(a[i]==b)
                             console.log(a[i])
                         }})()
                     
                     //Return median of two sorted arrays of same size
                     const median = (a, b) => {
                         let c = [...a, ...b].sort((a,b) =>a-b);
                         const half = c.length / 2 | 0;
                         if (c.length % 2) return c[half];
                         return (c[half] + c[half-1])/2;
                     }
                     let a=[1,8,6];
                     let b=[9,8,7];
                     console.log(median(a,b));
                     
//Remove duplicates from an array
(() => {
                         let a=[1,4,5,2,4,5,4,5,8];
                         let Duplicate = [...new Set(a)];
                         console.log(Duplicate);
                     })();
                     
                     //Rotate an array by k times
                     const rotateArray1 =(nums,k)=>{
                         for (let i=0;i<k;i++) {
                             nums.unshift(nums.pop());
                         }
                         return nums;
                       }
                       let nums=[2,7,6,8];
                       let k=[2];
                       console.log(rotateArray1(nums,k));