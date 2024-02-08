function deleteInvalids(array){
    let unique = [];
    if(!Array.isArray(array)){
        return 'please provide an array.';
    }
    for(const items of array){
        if(typeof items === 'number' && !isNaN(items)){
            unique.push(items);
        }
    }
    return unique;
};
const result = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(result);
