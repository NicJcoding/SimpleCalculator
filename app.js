
 
 (function ()  {


    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            console.log(button)
            let value = event.target.dataset.num;
            screen.value += value;
        })
    })
    equal.addEventListener('click', function(event) {
            let answer = eval(screen.value);
            screen.value = answer
           let splitElement = screen.value.split('');
           // solved this all by myself :)
           splitElement.forEach(element => {
            if (element === "/") {
                screen.value.toFixed(2);
            } else {
                screen.value;
            }
           })
        
    })

    clear.addEventListener('click', function(event) {
        screen.value = '';
    })


})();

