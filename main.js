
  // Variaveis
 let info = document.querySelector(".informacoes")
	 let botao = document.querySelector("#tente")
	 let submit= document.querySelector("#key")
	 let forms=document.querySelector("#forms") 
	 let hamb=document.querySelector(".hamburguer")
	 let cont=0

	 let enviar= document.querySelector(".enviar")
	 let chave= [ 'poczinha','princesa',
	 			  'vida' , 'raio de luz',
	 			  'querida ruby', 'Miss universo',
	 			  'lobo mal','lobinho',
	 			  'brabo' , 'Brabo', 'rei delas',
	 			  'fria', 'amonguinhas',
	 			  'gada','bondosa',
	 			  'boruto','otaku'	
	 			]; // chaves de acesso
 
    // let key= window.prompt("Informe sua chave de acesso")
  
  // Abaixo é enviado pelo prompt
   if (key == chave[0] || key == chave[1]){
  		window.open("https://henriquegalvim.github.io/Nivel1/");
      } 
	    if (key == chave[2] || key == chave[3]){
	  	window.open("https://henriquegalvim.github.io/Nivel2/");
	      }
	    if (key == chave[4] || key == chave[5]){
	  	window.open("https://henriquegalvim.github.io/Nivel3/");
	      }
	    if (key == chave[6] || key == chave[7]){
	  	window.open("https://henriquegalvim.github.io/Nivel4/");
	      }
	    if (key == chave[8] || key == chave[9] || key == chave[10]){
	  	window.open("https://henriquegalvim.github.io/Nivel5/");
	      }
	    if (key == chave[11] || key == chave[12]){
	  	window.open("https://henriquegalvim.github.io/Nivel6/");
	      } 
	    if (key == chave[13] || key == chave[14]){
	  	window.open("https://henriquegalvim.github.io/Nivel7/");
	      }
	    if (key == chave[15] || key == chave[16]){
	  	window.open("https://henriquegalvim.github.io/Nivel8/");
	      }
  
  // Abaixo é pela parte de enviar pelo form
  
  enviar.addEventListener("click", ()=>{  // Os ifs representam a chave de acesso
	  if (submit.value == chave[0] || submit.value == chave[1]){ //duda
	  	window.open("https://henriquegalvim.github.io/Nivel1/");
	  }
	  if (submit.value == chave[2] || submit.value == chave[3]){ //milly
	  	window.open("https://henriquegalvim.github.io/Nivel2/");
	  }
	  if (submit.value == chave[4] || submit.value == chave[5]){ // ruby
	  	window.open("https://henriquegalvim.github.io/Nivel3/
	  }
	  if (submit.value == chave[6] || submit.value == chave[7]){ // chico
	  	window.open("https://henriquegalvim.github.io/Nivel4/");
	  }
	  if (submit.value == chave[8] || submit.value == chave[9] || submit.value == chave[10]){ // brabo
	  	window.open("https://henriquegalvim.github.io/Nivel5/");
	  }

	  if (submit.value == chave[11] || submit.value == chave[12]){ // tt
	  	window.open("https://henriquegalvim.github.io/Nivel6/");
	  }
	  if (submit.value == chave[13] || submit.value == chave[14]){ //a
	  	window.open("https://henriquegalvim.github.io/Nivel7/");
	  }
	  if (submit.value == chave[15] || submit.value == chave[16]){ // hek
	  	window.open("https://henriquegalvim.github.io/Nivel8/");
	  }
	  if(submit.value == ''){
	  	window.alert("Nenhuma chave foi inserida")
	  }
  })

  botao.addEventListener("click",()=>{
  	 let marc=document.getElementById("info").checked // Aqui ele verifica se ta marcado ou não, true pra sim false pra nao


  	 if (marc == true){
  	 	info.style.display = "block"; // Se for true o texto vai aparecer
  	 
  	 }
  	 if (marc == false){
  	 	info.style.display = "none"; // Se for false o texto vai desaparecer
  	 	
  	 }
  })

 hamb.addEventListener("click",()=>{
  	if (cont%2 == 0){
  		cont++
  		forms.style.display="none"
  		
  	 }else{
  		cont++
		forms.style.display="grid"

  	}
  })
 

// Até aqui tudo certo, falta inserir o resto das chaves de acesso apenas e modificar o layout no final. 		
