function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let NumToInsert=arr[i];
        let j=i-1;
        while(j>=0 && NumToInsert<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=NumToInsert;
    }
    return arr;
}

let arr=[120,10,200,3,19,12];
console.log(insertionsort(arr));