/**
 * Simples Simulador de uma lampada
 * @author Thiago Nascimento
 */

// variaveis de apoio 
let chave = false // o interruptor iniciar desligado
let lampada = true // a lampada esta ok

// pré carregamento do arquivo de audio
let som = new Audio('sound/breaking-glass.mp3')

// lanterna (pré carregamento)
let stream, track //variaveis de apoio
inicializarLanterna()


function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src = "img/broken.jpg"
        // reproduzindo um arquivo com audio no js
        // passo 1: copiar o arquivo de audio para o projeto
        // passo 2:  Usar a classe audiio(biblioteca interna no js)
        // passo 3: pré carregar o arquivo para sincronizar com atroca de imagem (experência do usuario)
        som.play()

        //apoio a logica para o JS identificar a lampada quebrada 
        lampada = false
    }

}

function onoff() {
    if (chave === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // o JS agora sabe que a chave está ligada 
        //verificar se a lampada esta intacta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
    } else {
    document.getElementById('interruptor').src = "img/swoff.png"
    //desligar a lampada 
    chave = false
    //verificar se a lampada esta intacta antes de apagar
    if (lampada === true) {
        document.getElementById('lamp').src = "img/off.jpg"
    }

    }
}

//estudo de eventos relacionados a click do mouse (pressionado ou não pressioado) e telas touch
// passo 1: capturar os elementos do html(DOM)
const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

//passo  2: manipular o evento mouse preossinado
// ddEventListener ("escuta de eventos em tempo real")
// mpusedown (mouse pressionado constantemente)
// mouseup (soltar o botão do mouse)
// touchStart (tocar na dela e manter)
// touchend (deixar de pressionar a tela )

botao.addEventListener('mousedown', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("botão pressionado")
    //se a lampada estiver inctacta e o interruptor principal estiver desligado
    if(lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

//soltar o botão do mouse 
botao.addEventListener('mouseup', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("botão do moouse solto")
        //se a lampada estiver inctacta e o interruptor principal estiver desligado
    if(lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }

})
 //tocar a tela touch e manter
botao.addEventListener('touchstart', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
   // console.log("tela pressionada")
        //se a lampada estiver inctacta e o interruptor principal estiver desligado
    if(lampada === true && chave === false){
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

//soltar o botão do mouse 
botao.addEventListener('touchend', (event) => {
    event.preventDefault() //ignorar o comportamento padrão
    //console.log("a tela nao esta sendo pressionada")
    //se a lampada estiver inctacta e o interruptor principal estiver desligado
    if(lampada === true && chave === false){
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }
})


//lanterna
//torch
async function inicializarLanterna() {
    // try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}

async function ligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}


async function desligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
}