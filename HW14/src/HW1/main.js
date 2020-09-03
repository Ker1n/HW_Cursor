function getHW1() {
    const priceBread = 15.678;
    const priceWine = 123.965;
    const priceCoffee = 90.2345;
    const sum = priceBread + priceWine + priceCoffee;
    const stock = 500;
    const avarage = sum / 3;
    const costPrise = sum / 2;
   
    let discount; 
    let minPrice       = Math.min(priceBread,priceWine,priceCoffee);  
    let maxPrice       = Math.max(priceBread,priceWine,priceCoffee);  
    let integerSum     = Math.floor(priceBread + priceWine + priceCoffee);
    let rounding       = Math.round(sum/100)*100; 
    let boolean        = sum % 2 == 0;
    let change         = stock - sum; 
    let roundingToTwo  = avarage.toFixed(2);
    let randomDiscount = Math.floor(Math.random(discount)*68.96); // max discount 30%
    let sumDiscount    = (sum - randomDiscount).toFixed(2); 
    let profit         = sum - randomDiscount - costPrise;
   
   document.getElementById('hw1').innerHTML = `
   Максимальная сумма товара:      ${maxPrice} <br>
   Минимальная сумма товара:       ${minPrice} <br>
   Сумма всех товаров:             ${sum} <br>
   Округленная сумма товаров:      ${integerSum} <br>
   Округленная сумма до сотни:     ${rounding} <br>
   Сумма парная или непарная:      ${boolean} <br>
   Сумма сдачи:                    ${change} <br>
   Среднее значение цен:           ${roundingToTwo} <br>
   Случайная скидка до 30%:        ${randomDiscount} <br>
   Сумма к оплате с учетом скидки: ${sumDiscount} <br>
   Прибыль магазина с учетом скидки: ${profit} <br>
   
   `
  
}
export default { 
    getHW1
}