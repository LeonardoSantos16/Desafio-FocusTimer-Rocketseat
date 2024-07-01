//controle de eventos
import * as actions from './actions.js'
import * as el from './elements.js'




// registro de controles ao ser clicado
export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        // apresenta onde o mouse está clicando
        const action = event.target.dataset.action
        // se o click não for em um elemento do tipo função, retornar a função
        if(typeof actions[action] != "function") {
            return
        }
        // se for uma function aplicar a action 
        actions[action]()

    })

}

export function registerCard(){
    el.card.addEventListener('click', (event) =>{
        const actionCard = event.target.dataset.action
        console.log(actionCard)
        if(typeof actions[actionCard] != "function"){
            console.log(typeof actions[actionCard])
            return
        }
        console.log(typeof actions[actionCard])
        actions[actionCard]()
    })
}

