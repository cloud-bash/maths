//take an unsigned 32bit decimal and flip the 0's to 1's and return the unsigned decimal

function flippedBits(n) {
    let flippedDecimal = 0;
    //declare and define the array - add 32 0's to the array
    let bitArray = [];
    for(let i = 0;i<32;i++){
        bitArray.push(0);
    } 
    //Convert n into an array of 1's and 0's
        for(let a = 0;a<bitArray.length;a++){
            if(n - Math.pow(2, (31-a)) >= 0){
                bitArray[a] = 1;
                n = n - Math.pow(2, (31-a));
            }
        }                
    //converts the array into the decimal integer,
    //not by flipping the bits in the array,
    //but by adding the 2 to the power of 31 minus the index of the array
    //when the bit is 0
        for(let x = 0;x<bitArray.length;x++){
            if(bitArray[x] === 0){
                flippedDecimal = flippedDecimal + Math.pow(2, (31 - x));
            }
        }
        console.log(flippedDecimal);
        return flippedDecimal;
    }   
