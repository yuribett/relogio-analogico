class RelogioController {

    constructor() {
        this._canvas = document.querySelector("#relogio");
        this._contexto = this._canvas.getContext("2d");
        this._radius = this._canvas.height / 2;

        this._contexto.translate(this._radius, this._radius);
        this._radius = this._radius * 0.90

        this._relogio = new Relogio(this._contexto, this._radius);
        this._view = new RelogioView(this._relogio);

        //Botao  
        this._botao = document.querySelector("#botaoMostrarRelogio");
        this._bindEvents(this);

    }

    _renderHorario() {
        this._view.renderHorario();
    }

    _bindEvents(_self) {
        mostrar();

        this._botao.addEventListener("click", event => {
            if (!_self._canvas.style.display || _self._canvas.style.display === 'none') {
                mostrar();
            } else {
                esconder();
            }
        })

        function esconder() {
            _self._canvas.style.display = 'none';
            _self._botao.innerHTML = "Mostrar Relógio";
        }

        function mostrar() {
            _self._canvas.style.display = 'block';
            _self._botao.innerHTML = "Esconder Relógio";
        }

        
    }

}

new RelogioController();