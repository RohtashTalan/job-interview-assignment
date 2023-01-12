// 1,8,2,7,4,6,5,3,9,0

let arr = [1,8,2,7,4,6,5,3,9,0];

// let newArr = arr.sort((a,b) =>  a - b);

let newArr=[];

for(i=0; i<arr.length; i++){

    for(j=0; j<arr.length; j++){
            if(arr[i]<arr[j+1]){
                newArr.push(arr[i])
            }
          
        }
    
     }
    

console.log(newArr);




