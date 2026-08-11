function averageResponseTime(times) {
//   if (Array.isArray(times) = false) {
//         return "Invalid";
//    }
    let total=0;
    if(Array.isArray(times)){
        // if (times.length = 0) {
        if (times.length === 0) {
            return "Invalid";
        }
        else{
            // let total = 0;
            // for (let i = 1; i <= times.length; i++) {
            for (let i = 0; i <= times.length-1; i++) {
                if(typeof times[i] === "number"){
                    // total = total + time[i];
                    total = total + times[i];
                }
                else{
                    return "Invalid";
                }
            }
        }
        return total / times.length;
    }
    else{
        return "Invalid";
    }
    // return total / times;
}

console.log(averageResponseTime([120, 200, 150, 130]))
console.log(averageResponseTime([100,100]))
console.log(averageResponseTime([]))
console.log(averageResponseTime("[120, 200, 150, 130]"))
console.log(averageResponseTime([120, 200, 150, "130"]))