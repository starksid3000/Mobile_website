const item1 =  document.getElementById('1');
const p1 = document.getElementById('p1');
const item2 =  document.getElementById('2');
const p2 = document.getElementById('p2');
const item3 =  document.getElementById('3');
const p3 = document.getElementById('p3');
const btn = document.getElementById('btn');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
item1.addEventListener('click',function(){
   document.getElementById('1').style.display='none';
   document.getElementById('p1').style.display='block';
})
p1.addEventListener('click',function(){
   document.getElementById('1').style.display='block';
   document.getElementById('p1').style.display='none';
})
item2.addEventListener('click',function(){
  document.getElementById('2').style.display='none';
  document.getElementById('p2').style.display='block';
})
p2.addEventListener('click',function(){
   document.getElementById('2').style.display='block';
   document.getElementById('p2').style.display='none';
})
item3.addEventListener('click',function(){
  document.getElementById('3').style.display='none';
  document.getElementById('p3').style.display='block';
})
p3.addEventListener('click',function(){
   document.getElementById('3').style.display='block';
   document.getElementById('p3').style.display='none';
})

btn.addEventListener('click',function(){
  alert('Message sent! Contact you soon')
})