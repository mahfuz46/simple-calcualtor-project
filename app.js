(function(){

    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })


    });

    equal.addEventListener('click', function(e){
        if (screen.value === '') {
            screen.value = "please enterr";

        } 
        else {
            ts = screen.value
            k = ts.substr(0, ts.length - 9)
            console.log(k)
            let answer = eval(k);
            screen.value = answer;

        }

    });

    clear.addEventListener('click', function(e){
        screen.value="";
    })



})();