
//UNION SORT
[1,1,7]
[1,1,2]
[1,1,2,7]

function Union(arr,arr2){
    temp=[]
    index=0
    for(let i=0, j=index;i<arr.length,j<arr2.length;i++,j++){
        temp += arr[i]
        console.log("temp",temp)
        if(arr[i] != arr2[j]){
            console.log(arr2[j])
            temp += arr2[j]
            index = j+1
            
        }
    }
    return temp
}
array = [1,2,3,4,5,7]
arrayb = [1,2,2,3,6,8]
//expected output = [1,2,2,3,4,5,6,7,8]
console.log(Union(array,arrayb))

