var event, ok,money;
var answers = [];
money=0;
step(quest1.q,quest1.correct,money)
if (event == quest1.correct){
    money=100;
    step(quest2.q,quest2.correct,money)
    if (event == quest2.correct){
        money+=money
        step(quest3.q,quest3.correct,money)
        if (event == quest3.correct){
            money+=money;
            alert('Вы ответили верно на все вопросы, ваш выигрыш: '+money+'$')
        }
    }
}


function step(a,b,c){
    do {
        ok = false;
        event = +prompt(a + '\n-1 - Забрать деньни');
        if (event == -1) {
            alert('Ваш выигрыш: '+ c+'$' )
            break;
        }
        else {
            ok = isAnswer(event);
            if (event == b){
                alert('Вы ответили верно');
            }
            else 
                alert(a+'\n'+ 'Вы ошиблись, правильный ответ:'+b)
        }
    } while (!ok);
}

function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 5) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}
