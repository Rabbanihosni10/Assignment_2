function isElevatorSafe(weights){
    let arr=weights;
    // return typeof arr;
    let sum=0;
    if (typeof arr === "object" && Array.isArray(arr)){
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        if(sum<=400){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "Invalid";
    }
}

console.log(isElevatorSafe([64,23,24,50]));
console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));

