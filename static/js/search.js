document.addEventListener('DOMContentLoaded', function() {
  const deg = 6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');

  setInterval(() => {
      const day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
      
      
      

      
      var date = new Date();
      
      const sec = date.getSeconds();
      const min = date.getMinutes();
      const hour = date.getHours();
      const todate = date.getDate();
      const tomonth = date.getMonth();
      const toyear = date.getFullYear(); 
//----------------------------------------------------------------
      if (tomonth == 0) {
        var texmonth = 'january';
      }
      if (tomonth == 1) {
        var texmonth = 'february';
      }
      if (tomonth == 2) {
        var texmonth = 'march';
      }
      if (tomonth == 3) {
        var texmonth = 'april';
      }
      if (tomonth == 4) {
        var texmonth = 'may';
      }
      if (tomonth == 5) {
        var texmonth = 'june';
      }
      if (tomonth == 6) {
        var texmonth = 'july';
      }
      if (tomonth == 7) {
        var texmonth = 'august';
      }
      if (tomonth == 8) {
        var texmonth = 'september';
      }
      if (tomonth == 9) {
        var texmonth = '0ctober';
      }
      if (tomonth == 10) {
        var texmonth = 'november';
      }
      if (tomonth == 11) {
        var texmonth = 'december';
      }

      if (min < 10){
        var tomin = ('0' + min)
      }
      else {
        var tomin = min
      }

      if (sec > 10 )
        document.getElementById('time').innerHTML = hour +'  :  '+ tomin +'  :  '+  sec;
      else
        document.getElementById('time').innerHTML = hour +'  :  '+ tomin +'  :  '+  '0' + sec;
      
      document.getElementById('date').innerHTML = todate + '  -  ' + (texmonth) + '  -  ' + toyear;
//-------------------------------------------------------------------------------------------------------------------------------------------------
/*

      if (sec >= 10 )
        document.getElementById('initime').innerHTML = tomin +':' +(sec);
      else
        document.getElementById('initime').innerHTML =  tomin +':' + ('0' + sec);
      if (sec >= 10 )
        document.getElementById('fintime').innerHTML = tomin +':' +(sec);
      else
        document.getElementById('fintime').innerHTML =  tomin +':' + ('0' + sec);


*/
      

  }, 1000);

  
});
//----------------------------------------------------------------
function fillcolor() {
  const element = document.getElementById("heart"); 
  let fillornot = element.getAttribute("fill");
  
  if (fillornot == "none") {
    document.getElementById('heart').setAttribute('fill', 'red');
    document.getElementById('heart').setAttribute('stroke', 'red'); // Assuming you want to hide the stroke when filling the heart
  } else {
    document.getElementById('heart').setAttribute('fill', 'none');
    document.getElementById('heart').setAttribute('stroke', 'black');
  }
}


//----------------------------------------------------------------

function search(){
  document.getElementById('search1')
  addEventListener('click', () => {
    var a = document.getElementById('inpt').value;
    window.location.href = `https://www.google.com/search?q=${a} `
  })
}


//----------------------------------------------------------------

