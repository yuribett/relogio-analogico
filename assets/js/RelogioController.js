(function () {

    let relogio = document.querySelector("#relogio");
    let contexto = relogio.getContext("2d");
    let radius = relogio.height / 2;
    contexto.translate(radius, radius);
    radius = radius * 0.90

    let _relogio = new Relogio();

    let renderRelogio = () => {
        renderSuperfice(contexto, radius);
        renderNumeros(contexto, radius);
        renderHorario(contexto, radius);
    }

    let renderSuperfice = (contexto, radius) => {
        let grad;
        contexto.beginPath();
        contexto.arc(0, 0, radius, 0, 2 * Math.PI);
        contexto.fillStyle = 'white';
        contexto.fill();
        /*
        grad = contexto.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        contexto.strokeStyle = grad;
        */
        contexto.lineWidth = radius * 0.1;
        contexto.stroke();
        contexto.beginPath();
        contexto.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        contexto.fillStyle = '#333';
        contexto.fill();
    }

    let renderNumeros = (contexto, radius) => {
        let angulo;
        let numero;
        contexto.font = radius * 0.15 + "px arial";
        contexto.textBaseline = "middle";
        contexto.textAlign = "center";
        for (numero = 1; numero < 25; numero++) {
            angulo = numero * Math.PI / 12;
            contexto.rotate(angulo);
            contexto.translate(0, -radius * 0.85);
            contexto.rotate(-angulo);
            contexto.fillText(numero.toString(), 0, 0);
            contexto.rotate(angulo);
            contexto.translate(0, radius * 0.85);
            contexto.rotate(-angulo);
        }
    }

    let renderHorario = (contexto, radius) => {
        let now = new Date();
        let hora = now.getHours();
        let minuto = now.getMinutes();
        let segundo = now.getSeconds();
        //hora
        hora = hora % 12;
        hora = (hora * Math.PI / 6) +
            (minuto * Math.PI / (6 * 60)) +
            (segundo * Math.PI / (360 * 60));
        ponteiroFactory(contexto, hora, radius * 0.5, radius * 0.07);
        //minuto
        minuto = (minuto * Math.PI / 30) + (segundo * Math.PI / (30 * 60));
        ponteiroFactory(contexto, minuto, radius * 0.8, radius * 0.07);
        // segundo
        segundo = (segundo * Math.PI / 30);
        ponteiroFactory(contexto, segundo, radius * 0.9, radius * 0.02);
    }

    let ponteiroFactory = (contexto, pos, length, width) => {
        contexto.beginPath();
        contexto.lineWidth = width;
        contexto.lineCap = "round";
        contexto.moveTo(0, 0);
        contexto.rotate(pos);
        contexto.lineTo(0, -length);
        contexto.stroke();
        contexto.rotate(-pos);
    }

    
    setInterval(renderRelogio, 1000);

    let botao = document.querySelector("#botaoMostrarRelogio");
    document.querySelector("#botaoMostrarRelogio").addEventListener("click", event => {
        
        if (!relogio.style.display || relogio.style.display === 'none') {
            relogio.style.display = 'block';
            botao.innerHTML = "Esconder Relógio"
        } else {
            relogio.style.display = 'none';
            botao.innerHTML = "Mostrar Relógio"
        } 
    })
    
})();