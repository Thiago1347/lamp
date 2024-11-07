/**
 * Simples Simulador de uma lampada
 * @author Thiago Nascimento
 */

function quebrar() {
 document.getElementById('lamp').src="img/broken.jpg"  
  // reproduzindo um arquivo com audio no js
  // passo 1: copiar o arquivo de audio para o projeto
  // passo 2:  Usar a classe audiio(biblioteca interna no js)
  let som = new Audio()
  som.src = "sound/glassbreaking.wav"
  som.play()
}