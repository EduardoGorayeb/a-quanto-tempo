function calcularDiferencaNamoro() {
    var dataInicio = new Date(2024, 4, 18, 0, 48, 0);
    var dataAtual = new Date();

    var anos = dataAtual.getFullYear() - dataInicio.getFullYear();
    var meses = dataAtual.getMonth() - dataInicio.getMonth();
    var dias = dataAtual.getDate() - dataInicio.getDate();

    if (meses < 0) {
        anos--;
        meses += 12;
    }
    if (dias < 0) {
        meses--;
        dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    }

    var horas = dataAtual.getHours() - dataInicio.getHours();
    var minutos = dataAtual.getMinutes() - dataInicio.getMinutes();
    var segundos = dataAtual.getSeconds() - dataInicio.getSeconds();
    var milissegundos = dataAtual.getMilliseconds() - dataInicio.getMilliseconds();

    if (milissegundos < 0) {
        milissegundos += 1000;
        segundos--;
    }
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }

    document.getElementById('tempo').innerText = `${anos} anos\n ${meses} meses\n ${dias} dias\n ${horas} horas\n ${minutos} minutos\n ${segundos} segundos\n ${milissegundos} milissegundos`;
}

setInterval(calcularDiferencaNamoro, 1);