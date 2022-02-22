export function show_btn () {

    const btn_show = document.getElementById('btn-show');
    // console.log(btn_show);

    btn_show.addEventListener ('click', (e) => {
    // console.log(e);
    const tar = document.getElementsByClassName('side-options')[0];
    tar.classList.toggle('show-btn');
});
}