/*-- TOOLTIPS --*/

var tooltip = document.querySelectorAll('.tooltip');

document.addEventListener('mousemove', ttp, false);

function ttp(e) {
    for (var i=tooltip.length; i--;) {
    tooltip[i].style.left = e.pageX + 100 + 'px';
    tooltip[i].style.top = e.pageY + -20 + 'px';
    }
}