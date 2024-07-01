import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

// utilizamos o estado para atualizar as propriedades minutes e seconds ao chamar a função start
export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    events.registerControls()
    events.registerCard();
    
}

