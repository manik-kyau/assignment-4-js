function calculateMoney(ticketSale){

    if(typeof ticketSale !== 'number' || ticketSale < 0){
        return 'Please Provide a valid and positive number';
    }
    const ticketPrice = 120;
    const securityGuardFee = 500;
    const staff = 8;
    const lunchExpenses = 50;

    let totalIncome = (ticketSale * ticketPrice) - (securityGuardFee + (staff * lunchExpenses));

    return `(${ticketSale} * ${ticketPrice}) - (${securityGuardFee} + (${staff} * ${lunchExpenses})) = ${totalIncome}`;
    }
    const result = calculateMoney(0);
    console.log(result);