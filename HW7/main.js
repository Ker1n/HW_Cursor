const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};


function getMyTaxes(salary) {
    return salary * this.tax
};

console.log('getMyTaxes: ', getMyTaxes.call(ukraine, 3700) + "$");

function getMiddleTaxes() {
    result = this.middleSalary * this.tax;
    return result.toFixed(2)
}
console.log('getMiddleTaxes: ', getMiddleTaxes.call(ukraine) + "$");


function getTotalTaxes() {
    result = this.middleSalary * this.tax * this.vacancies;
    return result.toFixed(2)
}
console.log('getTotalTaxes: ', getTotalTaxes.call(ukraine) + "$");


function getMySalary () { 
    
    const min = 1500;
    const max = 2000; 
    let salary = Math.floor(min + (max - min) * Math.random());
    let taxes = salary * this.tax
    let profit = salary - taxes
    let obj = {salary, taxes, profit};   
    console.log(obj);
        setInterval(() => { console.log(obj) }, 10000);
        
    }
getMySalary.call(ukraine);
