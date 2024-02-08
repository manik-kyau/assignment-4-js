function monthlySavings(Allpayments, Livingcost){
    let sum = 0;
    let saving = 0;
    if(!Array.isArray(Allpayments) || typeof Livingcost !== 'number'){
        return 'invalid input';
    }
    
    for(let claentPayment of Allpayments){
        if(claentPayment >= 3000){
            // the rest of the payment after 20% tax,
            claentPayment = claentPayment - (claentPayment * 20) / 100; 
        }
        sum = sum + claentPayment;
    }
     saving = sum - Livingcost;
     if(saving < 0){
        return 'earn more';
    }
     return saving;
}
const result = monthlySavings();
console.log(result);