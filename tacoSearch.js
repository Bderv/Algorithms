clients = [[3,1],[1,2],[2,4],[4,2],[5,3]]
// we will attempt to find the average of x,y

function bestLocation(arr){
    sum1 = 0
    avg1 = 0
    sum2 = 0
    avg2 = 0
    for (i=0; i<arr.length;i++){
        for(k=0; k<arr.length; k++){
            sum1 += arr[k][0]
            sum2 += arr[k][1]
            avg1 = Math.round(sum1 / 25)
            avg2 = Math.round(sum2 / 25)
        }
    }
    console.log("["+avg1+","+avg2+"]")
}
bestLocation(clients)

function taco_king(arr){
    let shortest = 100
    let answer = []
    for(let x = 0; x <= 10; x++){
        for(let y = 0; y <= 10; y++){
            let sum = 0
            for (let i = 0; i < arr.length; i++){

                let temp = arr[i][0] - x
                if (temp < 0){
                    temp *= -1
                }
                sum += temp
                temp = arr[i][1] - y
                if (temp < 0){
                    temp *= -1
                }
                sum += temp
            }
            if (sum < shortest){
                shortest = sum
                answer = [x,y]
            }
        }
    }
    return answer

}

console.log(taco_king([[1,2], [9,5], [6,9], [3,5], [5,2]]))