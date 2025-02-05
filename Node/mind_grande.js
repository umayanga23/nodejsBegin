const num1= 5;
const num2 = 10;


function mul1(num1,num2) {
    const mul = num1+num2
    return mul
    
}

function mul2(num1,num2) {
    const mul2 = num1*num2
    return mul2
    
}

function addValue(mul1,mul2) {
    console.log(`the sum is : ${mul1+ mul2}`)

}





addValue(mul1(num1,num2),
mul2(mul1(num2,num1),num2)
)