'use strict';
{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('appear');//dtの親ノードのみにappearをつける
            //表示する回答を1つにするため、他のdtを調査する
            dts.forEach(el => {
                if (dt !== el) {
                    el.parentNode.classList.remove('appear');
                }
            });
       }) 
    });

}