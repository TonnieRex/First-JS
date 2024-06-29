// let age = 18;
// console.log(age);

// let name = "shola";
// console.log(name);

// let pi = 3.187;
// console.log(pi);

// let boo = true;
// console.log(boo);

// let add;
// console.log(add);

// let opt = 5 % 2;
// console.log(opt)


// let ma = 10.59;
// console.log(Math.floor(Math.random() * 10));

// let S = 2 < 5 || 2 > 3;
// console.log(S)

// console.log(!true)


// if (22 < 5){
//     console.log("It is correct!!!!")
// } else if(1 < 2){
//     console.log("This is the second condition!!!")
// }else{
//     console.log("false")
// }

// let data = 22 < 5 ? "It is correct": "It is wrong!!"
// console.log(data)

// let fix = 0 > 1 && "correct"
// console.log(fix)

// let w = 22 > 5;
// switch(w){
//     case true:
//         console.log("case true")
//         break;
//     case false:
//          console.log("false")
//         break;
//     default:
//         console.log("Default")
// }

// let a = 1
// switch(a) {
//     case 1:
//         console.log('1')
//         break
//     case 2:
//         console.log('2')
//         break
// }

function addition(score) {
    if (score > 90){
        return ("Excellent!!")
    }else if (score >= 80 || score ==89) {
        return "Average"
    }else if (score >= 70 || score ==79) {
        return "Good"
    }else{
        return "Try harder"
    }
}
let answer = addition(27)

console.log(answer)



