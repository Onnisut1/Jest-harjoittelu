function onkoTaysiIkainen(ika){
    if(typeof ika !=='number'){
        throw new Error("Anna NUMERO")
    }
    else{
        if(ika >= 18){
            return "Täysi ikäinen"
        }
        else{
            return "Ei täysi ikäinen"
        }
    }
}
module.exports = onkoTaysiIkainen;