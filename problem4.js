function topRatedRestaurant(restaurants) {
    let rate=0.0;
    let nam="";
    let nam2="";
    let ct=restaurants.length;
    let flag=true;
    if(typeof restaurants==="object" && ct!==0){
        for(let i of restaurants){
            let kt=0;
            for(let j in i){
                let key=j;
                let value=i[j];
                if(flag===true){
                    if(kt===0){
                        nam=value;
                        kt++;
                    }
                    else{
                        if(rate<value){
                            rate=value;
                        }
                        kt=0;
                        flag=false;
                    }
                }
                else{
                    if(kt===0){
                        nam2=value;
                        kt++;
                    }
                    else{
                        if(rate<value){
                            kt=0;
                            nam=nam2;
                            rate=value;
                            flag=true;
                            break;
                        }
                        else{
                            break;
                        }
                    }
                }
            }
        }
        return nam.toUpperCase();        
    }
    else{
        return "Invalid";
    }

}
