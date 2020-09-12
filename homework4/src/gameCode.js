var event, ok;
var answers = [];

step(works.a00,works.a1,works.a2,works.a0)
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 
        step(works.b00,works.b1,works.b2,works.b0)
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            step(works.d00,works.d1,works.d2,works.d0)
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
            step(works.d00,works.d1,works.d2,works.d0)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    step(works.c00,works.c1,works.c2,works.c0)
        switch (event) {
            case 1: // Второе действие
            step(works.d00,works.d1,works.d2,works.d0)
                break;
            case 2: // Второе действие
            step(works.d00,works.d1,works.d2,works.d0)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers)
var logEvent = prompt('Выберите шаг',);
alert ('Вы выбрали  на шаге: '+ logEvent+' вариант ответа: '+answers[logEvent-1])

function step(ba,bb,bc,bd){
    do {
        ok = false;
        event = +prompt(ba + bb + bc + '-1 - Выход из игры');
        if (event == -1) {
            answers.push('-1 - Выход из игры');
            break;
        }
        else {
            ok = isAnswer(bd, event);
            if (event == 1){
                answers.push(bb);
            }
            else 
                answers.push(bc)
        }
    } while (!ok);
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

