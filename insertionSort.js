// insertion sorting


    
    function sort(arr){  
        for (i = 0; i < arr.length; ++i) { 
            temp = arr[i]; 
            j = i - 1; 
            while (j >= 0 && arr[j] > temp) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = temp; 
        }
        return arr 
    } 

console.log(sort([4,3,2,7,6,12,1]))