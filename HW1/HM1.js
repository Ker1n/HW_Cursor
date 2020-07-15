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
 let boolean        = Math.floor(sum)% 2 ? "Odd" : "Even"
 let change         = stock - sum; 
 let roundingToTwo  = avarage.toFixed(2);
 let randomDiscount = Math.floor(Math.random(discount)*68.96); // max discount 30%
 let sumDiscount    = (sum - randomDiscount).toFixed(2); 
 let profit         = sum - randomDiscount - costPrise;

 console.log(`
Максимальная сумма товара:      ${maxPrice}
Минимальная сумма товара:       ${minPrice}
Сумма всех товаров:             ${sum}
Округленная сумма товаров:      ${integerSum}
Округленная сумма до сотни:     ${rounding}
Сумма парная или непарная:      ${boolean}
Сумма сдачи:                    ${change}
Среднее значение цен:           ${roundingToTwo}
Случайная скидка до 30%:        ${randomDiscount}
Сумма к оплате с учетом скидки: ${sumDiscount}
Прибыль магазина с учетом скидки: ${profit}
`);