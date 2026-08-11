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

