/*--- LIGHT/DARK MODE ---*/
function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#fff');
    }
    else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#000');
    }
}
/* See how this uses root styles! Very similar to CSS roots, and uses them in fact. */
setTheme('light');


function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.dispay = 'none';
    else e.style.display = 'block';
}