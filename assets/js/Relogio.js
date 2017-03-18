class Relogio {

    constructor(contexto, radius){
        this._contexto = contexto;
        this._radius = radius;
        Object.freeze(this);
    }

    get contexto () {
        return this._contexto;
    }

    get radius () {
        return this._radius;
    }

}