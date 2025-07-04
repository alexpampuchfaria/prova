let mostraHTML = document.getElementById("mostraHTML");
let jhonHTML = document.getElementById("jhonHTML");

let nome1;
let nome2;
let nome3;
let nome4;
let nome5;
let nome6;
let nome7;
let nome8;
let nome9;
let nome10;
let nome11;
let nome12;
    let idade1;
    let idade2;
    let idade3;
    let idade4;
    let idade5;
    let idade6;
    let idade7;
    let idade8;
    let idade9;
    let idade10;
    let idade11;
    let idade12;
        let time1;
        let time2;
        let time3;
        let time4;
         let media1 = 0;
         let media2;
         let media3;
         let media4;


function cadastro(){

    time1 =(window.prompt("qual o nome do seu time"));
    mostraHTML.innerHTML +=`<p> time-${time1}</p>`;
    
    
  
      nome1 =(window.prompt("qual o seu nome"));
    
    idade1 =(window.prompt("qual sua idade"));
     mostraHTML.innerHTML +=`<p> ${nome1}, idade:${idade1}</p>`;


      nome2=(window.prompt("qual o seu nome"));
    
    idade2 =(window.prompt("qual sua idade"));
     mostraHTML.innerHTML +=`<p> ${nome2}, idade:${idade2}</p>`;


      nome3 =(window.prompt("qual o seu nome"));
    
    idade3  =(window.prompt("qual sua idade"));
    mostraHTML.innerHTML +=`<p> ${nome3}, idade:${idade3}</p>`;

    media1 = ((idade1 + idade2 + idade3) / 3);


    mostraHTML.innerHTML +=`<p> media:${media1}</p>`;
    








      time2 =(window.prompt("qual o nome do seu time"));
    jhonHTML.innerHTML +=`<p> time-${time2}</p>`;
    
    
  
      nome4 =(window.prompt("qual o seu nome"));
    
    idade4 =(window.prompt("qual sua idade"));
    jhonHTML.innerHTML +=`<p> ${nome4}, idade:${idade4}</p>`;


      nome5=(window.prompt("qual o seu nome"));
    
    idade5 =(window.prompt("qual sua idade"));
    jhonHTML.innerHTML +=`<p> ${nome5}, idade:${idade5}</p>`;


      nome6 =(window.prompt("qual o seu nome"));
    
    idade6  =(window.prompt("qual sua idade"));
    jhonHTML.innerHTML +=`<p> ${nome6}, idade:${idade6}</p>`;







    
     time3 =(window.prompt("qual o nome do seu time"));
    frontHTML.innerHTML +=`<p> time-${time3}</p>`;
    
    
  
      nome7 =(window.prompt("qual o seu nome"));
    
    idade7 =(window.prompt("qual sua idade"));
    frontHTML.innerHTML +=`<p> ${nome7}, idade:${idade7}</p>`;


      nome8 =(window.prompt("qual o seu nome"));
    
    idade8 =(window.prompt("qual sua idade"));
    frontHTML.innerHTML +=`<p> ${nome8}, idade:${idade8}</p>`;


      nome9=(window.prompt("qual o seu nome"));
    
    idade9  =(window.prompt("qual sua idade"));
      frontHTML.innerHTML +=`<p> ${nome9}, idade:${idade9}</p>`;





          
     time4 =(window.prompt("qual o nome do seu time"));
    leHTML.innerHTML +=`<p> time-${time4}</p>`;
    
    
  
      nome10 =(window.prompt("qual o seu nome"));
    
    idade10 =(window.prompt("qual sua idade"));
    leHTML.innerHTML +=`<p> ${nome10}, idade:${idade10}</p>`;


      nome11 =(window.prompt("qual o seu nome"));
    
    idade11 =(window.prompt("qual sua idade"));
    leHTML.innerHTML +=`<p> ${nome11}, idade:${idade11}</p>`;


      nome12=(window.prompt("qual o seu nome"));
    
    idade12  =(window.prompt("qual sua idade"));
      leHTML.innerHTML +=`<p> ${nome12}, idade:${idade12}</p>`;


    


      if(times = 4){
        alert("PAREEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!JA DEU 4 TIMES. SE CONTINUAR VOU COMER VC COMUMA PICA DE PLASTICO DE 1 METRO")
      }else{
       
      }

      
    }