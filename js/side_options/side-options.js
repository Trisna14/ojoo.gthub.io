// export function hello_world () {
//     console.log('hello world !');
// }

export function show_options () {
    const btn_dots = document.getElementsByClassName('dots');
    var arr_btn = Array.from(btn_dots);
    // total num dots
    var num_btn = [];
    arr_btn.forEach((e,i) => {
        num_btn.push(i);
        // console.log(i);
        // console.log(e);
        return i;
    });

    var i;
    for (i = 0;i < num_btn.length; i++) {
        // console.log(i);
        // console.log(num_btn);

        btn_dots[i].addEventListener ('click', function (e) {

            var n;
            for (n = 0;n < btn_dots.length; n++) {
                btn_dots[n].classList.remove('touch');
                // console.log(btn_dots[n]);
            }

            this.classList.add('touch');
            
            // console.log(this.childNodes[1].attributes.href.value.slice(1));
            const target = document.getElementById(this.childNodes[1].attributes.href.value.slice(1));
            
            const target_options = document.getElementsByClassName('dots-options');
            var nn;
            for (nn = 0; nn < target_options.length; nn++) {
                target_options[nn].classList.add('hide');
                target_options[nn].classList.remove('show');
            }

            console.log(target.classList.add('show'));
        });
    }
}