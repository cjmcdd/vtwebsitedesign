document.getElementById('button1').onclick = switchred;
document.getElementById('button2').onclick = switchgreen;
document.getElementById('button3').onclick = switchwhite;


function switchred()
{
  document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchgreen()
{
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
  document.getElementsByTagName('body')[0].style.color = 'khaki';
}
function switchwhite()
{
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementsByTagName('body')[0].style.color = 'black';
}
