class RelogioView {

    constructor(relogio) {
        this._relogio = relogio;
        
        this._renderBase();
        this._renderNumeros();
        this._renderHorario();

        setInterval(() => {
            this._renderBase();
            this._renderNumeros();
            this._renderHorario();
        }, 1000);
    }

    _renderBase () {
        this._relogio.contexto.beginPath();
        this._relogio.contexto.arc(0, 0, this._relogio.radius, 0, 2 * Math.PI);
        this._relogio.contexto.fillStyle = 'white';
        this._relogio.contexto.fill();
        this._relogio.contexto.lineWidth = this._relogio.radius * 0.1;
        this._relogio.contexto.stroke();
        this._relogio.contexto.beginPath();
        this._relogio.contexto.arc(0, 0, this._relogio.radius * 0.1, 0, 2 * Math.PI);
        this._relogio.contexto.fillStyle = '#333';
        this._relogio.contexto.fill();
    }

    _renderNumeros() {
        let angulo;
        let numero;
        this._relogio.contexto.font = this._relogio.radius * 0.15 + "px arial";
        this._relogio.contexto.textBaseline = "middle";
        this._relogio.contexto.textAlign = "center";
        for (numero = 1; numero < 25; numero++) {
            angulo = numero * Math.PI / 12;
            this._relogio.contexto.rotate(angulo);
            this._relogio.contexto.translate(0, -this._relogio.radius * 0.85);
            this._relogio.contexto.rotate(-angulo);
            this._relogio.contexto.fillText(numero.toString(), 0, 0);
            this._relogio.contexto.rotate(angulo);
            this._relogio.contexto.translate(0, this._relogio.radius * 0.85);
            this._relogio.contexto.rotate(-angulo);
        }
    }

    _renderHorario () {
        let dtAtual = new Date();
        let hora = dtAtual.getHours();
        let minuto = dtAtual.getMinutes();
        let segundo = dtAtual.getSeconds();
        
        hora = hora % 24;
        hora = (hora * Math.PI / 12) +
            (minuto * Math.PI / (12 * 60)) +
            (segundo * Math.PI / (720 * 60));
        PonteiroFactory.criarPonteiro(this._relogio.contexto, hora, this._relogio.radius * 0.5, this._relogio.radius * 0.07);
        
        minuto = (minuto * Math.PI / 30) + (segundo * Math.PI / (30 * 60));
        PonteiroFactory.criarPonteiro(this._relogio.contexto, minuto, this._relogio.radius * 0.8, this._relogio.radius * 0.07);
        
        segundo = (segundo * Math.PI / 30);
        PonteiroFactory.criarPonteiro(this._relogio.contexto, segundo, this._relogio.radius * 0.9, this._relogio.radius * 0.02);
    }

}