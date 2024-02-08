function checkName(name){
    let leter = 'a,y,i,e,o,u,w';

    let uperLater =leter.toUpperCase();
    
    if(typeof name !== 'string'){
        return 'invalid';
    }
    if(leter.includes(name.charAt(name.length-1)) || uperLater.includes(name.charAt(name.length-1))){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}
