/**
 * Simples Simulador de uma lampada
 * @author Thiago Nascimento
 */

// variaveis de apoio 
let chave  =false // o interruptor iniciar desligado
let lampada = true // a lampada esta ok


function quebrar() {
    if (lampada === true){
        document.getElementById('lamp').src="img/broken.jpg"  
        // reproduzindo um arquivo com audio no js
        // passo 1: copiar o arquivo de audio para o projeto
        // passo 2:  Usar a classe audiio(biblioteca interna no js)
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        //apoio a logica para o JS identificar a lampada quebrada 
        lampada =false
    }

}

function onoff(){
    if (chave ===false && lampada === true) {
        document.getElementById('interruptor').src="img/swon.png"
        document.getElementById('lamp').src="img/on.jpg"
        chave = true // o JS agora sabe que a chave está ligada 

    } else if (lampada ===true){
         document.getElementById('interruptor').src="img/swoff.png"
         document.getElementById('lamp').src="img/off.jpg" 
         chave = false
    }
  

}