import { actions } from "./actions";

export default function getAction (text, id) {
    let resultado;

    actions.forEach((action) => {
        if(action.id === id) {
            resultado = action.action(text)
        }
    })
    console.log(resultado)
    return resultado;
}