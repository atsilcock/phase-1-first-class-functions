function receivesAFunction (cb) {
console.log(cb())
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction() { 
    let a = 24;
    let b = 15;

    return function(){
       return a + b
    }

}

console.log(returnsAnAnonymousFunction()())