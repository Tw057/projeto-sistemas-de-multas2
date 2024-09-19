function clicar(){
  var res = document.getElementById('tx1')
  var resu =(res.value)
  var oi = document.getElementById('texto-tela')
  oi.innerHTML=`sua velocidade atual é de ${resu}km`

  if(resu>60){

   oi.innerHTML+=`<br>vc está multado por excesso de velocidade! `
   
   oi.innerHTML+='<br>dirija sempre usando cinto de segurança!'

  }else{
   
   oi.innerHTML+='<br>dirija sempre usando cinto de segurança!'
    
        }
      
      
     

  

   
   }