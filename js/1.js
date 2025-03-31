document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');

    const info = document.querySelector('.main__info');
    const test = document.querySelector('.main__test');


    btn1.addEventListener("click", function() {
        test.classList.add('dn');
        info.classList.remove('dn');
        btn1.classList.add('btn__active');
        btn2.classList.remove('btn__active');
        console.log("asdasd")
        });
        
    btn2.addEventListener("click", function() {
        info.classList.add('dn');
        test.classList.remove('dn');
        btn2.classList.add('btn__active');
        btn1.classList.remove('btn__active');
        });
})