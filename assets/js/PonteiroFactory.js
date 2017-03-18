class PonteiroFactory {

    static criarPonteiro (contexto, pos, length, width) {
        contexto.beginPath();
        contexto.lineWidth = width;
        //contexto.lineCap = "round";
        contexto.moveTo(0, 0);
        contexto.rotate(pos);
        contexto.lineTo(0, -length);
        contexto.stroke();
        contexto.rotate(-pos);
    }

}