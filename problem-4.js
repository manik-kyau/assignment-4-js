function password(obj){
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return 'invalid';
    }
    else if(!obj.name || !obj.birthYear || !obj.siteName){
        return 'invalid';
    }
    else if(typeof obj.birthYear !== 'number' || obj.birthYear < 0) {
        return 'invalid';
    }
    else if(String(obj.birthYear).length < 4 || String(obj.birthYear).length > 4 ){
        return 'invalid';
    }
        let unique = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();

    return `${unique}#${obj.name}@${obj.birthYear}`
};
const result = password({ name:'maisha', birthYear:2002});
console.log(result);