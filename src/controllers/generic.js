export class Generic {
    constructor() {}

    static notFoundElements(element, msg, res) {
        if(element.length > 0){
            res.json(element);
        } else {
            res.status(404).json({ msg: `${msg} no encontrados` })
        }
    }

    static notFoundElement(element, msg, res) {
        if(element){
            res.json(element);
        } else {
            res.status(404).json({ msg: `${msg} no encontrado` })
        }
    }

} 