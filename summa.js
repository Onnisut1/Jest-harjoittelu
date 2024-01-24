function sum(a,b){
    if(a === undefined || a === null){
        return "Syötä numeroita";
    }
    else{
        if(typeof a == 'number' && typeof b == 'number'){
        return a + b;
        }
        else{
            return "Syötä numeroita"
        }
    }
}
module.exports = sum;