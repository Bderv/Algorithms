// writing 32 bit numbers
// example [0xF0,0x4a,0xB4,0x11] => 456873422

// encode bytes to 32 bits
// 
//1. [0xF0, 0xC3, 0x96, 0x59]
   //console.log(0b11110000110000111001011001011001)

// function encodingbites(arr){
//     string = ''
//     for (let i=arr.length-1;i>=2;i--){
//         console.log("hello")
//         string += arr(i)*(2**i)
//     }
//     return string
// }

// // console.log(4**4)
// console.log(encodingbites(0b11110000110000111001011001011001))

function codingBYTEShard(arr){
    happy={'0':'0000',
    '1':'0001',
    '2':'0010',
    '3':'0011',
    '4':'0100',
    '5':'0101',
    '6':'0110',
    '7':'0111',
    '8':'1000',
    '9':'1001',
    'A':'1010',
    'B':'1011',
    'C':'1100',
    'D':'1101',
    'E':'1110',
    'F':'1111'}
    numString = ''
    for (let i=0; i<arr.length; i++){
        num = arr[i]
        for(let i=7;i>=0;i--){
            if (num > 2**i){
                num -= 2**i
                numString += '1'
            }
            else {
                numString += '0'
            }
        }
    }
    counter = 0
    for (let i=numString.length-1; i>=0; i--){
        if (numString[i]=='1'){
            counter += 2**(numString.length-1-i)
        }
    }
    return counter
}
console.log(codingBYTEShard([0xF0, 0xC3, 0x96, 0x59]))

