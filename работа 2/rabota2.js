

function func(){

         
        
          var num1 = Number(document.getElementById("num1").value);
          var num2 = Number(document.getElementById("num2").value);
          var bebra = num1 - num2;
          var snusik = bebra * 2.24 ;
          
          var e = snusik * 1  ;
          var f = snusik / 2.91 ;
          var v = snusik / 85.75 ;
          var z = Math.ceil(e)
          var x = Math.ceil(f)
          var c = Math.ceil(v)
          var result = z + "руб "
          var result1 = x + " uah "
          var result2 = c + " $ "

          document.getElementById("result").innerHTML = result;
          

          document.getElementById("result1").innerHTML = result1;
          

          document.getElementById("result2").innerHTML = result2;
        
          }

 

 
 