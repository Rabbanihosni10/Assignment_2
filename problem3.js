function calculateAiCost(tokensUsed) {
    let totalCost=0;
    let extraToken=0;
    if (typeof tokensUsed ==="number" && tokensUsed>0){
        if(tokensUsed<=500){
            return totalCost;
        }
        else{
            extraToken+=tokensUsed-500;
            extraToken=extraToken/100;
            extraToken=Math.floor(extraToken);
            totalCost=extraToken*5;
            return totalCost;
        }
    }
    else{
        return "Invalid";
    }
    
}
