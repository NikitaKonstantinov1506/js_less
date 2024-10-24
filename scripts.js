let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
let seconAnswer = +prompt("Во сколько обойдется?")
appData = {
    cash:money,
    timeData:time,
    expenses:{
        firstAnswer:seconAnswer
    }
    
}
let cashOneDay = (money - seconAnswer) / 30
alert(cashOneDay)