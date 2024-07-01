import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function playToggle() {
    if(!state.isRunning){
        state.isRunning = true
        timer.countdown()
    }
}
export function pauseToggle(){
    state.isRunning = false
}

export function playTree(){
    // usando document.getElementById("card")
    const phTree = el.card.querySelector('button.ph.ph-tree')
    phTree.classList.toggle('cardPress');
    if(phTree.classList.contains('cardPress')){
        sounds.audioFloresta.play();
        return
    }
    sounds.audioFloresta.pause();
}

export function playCloud(){
    // usando querySelector direto no documentElement
    const phCloud = document.documentElement.querySelector('button.ph.ph-cloud');
    phCloud.classList.toggle('cardPress');
    if(phCloud.classList.contains('cardPress')){
        
        sounds.audioChuva.play();
        return
    }
    sounds.audioChuva.pause();
}

export function playCoffee(){
    //const phCoffee = document.documentElement.querySelector('button.ph.ph-coffee');
    const phCoffee = el.card.querySelector('button.ph.ph-coffee');
    phCoffee.classList.toggle('cardPress');
    if(phCoffee.classList.contains('cardPress')){
        sounds.audioCafeteria.play();
        return
    }
    sounds.audioCafeteria.pause();
}

export function playFire(){
    // const phFire = document.documentElement.querySelector('button.ph.ph-fire');
    const phFire = el.card.querySelector('button.ph.ph-fire');
    phFire.classList.toggle('cardPress');
    if(phFire.classList.contains('cardPress')){      
        sounds.audioLareira.play();
        return
    }
    sounds.audioLareira.pause();
}

export function reset() {   
    state.isRunning = false
    document.documentElement.t
    timer.updateDisplay()
}
export function plus(){
    timer.maisCinco()
}
export function minus(){
    timer.menosCinco()
}

