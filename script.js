const fecha = new Date();

const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");


const renderizar = () => {

    fecha.setDate(1);

    const diasMeses = document.querySelector(".dias");

    const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();


    const diasAnteriores = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate();

    const primerosDiasIndice = fecha.getDay();
    const ultimoDiaIndice = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDay();

    const proximosDias = 7 - ultimoDiaIndice - 1

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    document.querySelector(".fecha h1").innerHTML = meses[fecha.getMonth()];

    document.querySelector(".fecha p").innerHTML = new Date().toDateString();

    let dias = "";

    for (let x = primerosDiasIndice; x > 0; x--) {
        dias += `<div class="fecha-anterior">${diasAnteriores - x + 1}</div>`;

    }

    for (let i = 1; i <= ultimoDia; i++) {
        if (i == new Date().getDate() && fecha.getMonth() == new Date().getMonth()) {
            dias += `<div class="hoy">${i}</div>`;
        }
        else {
            dias += `<div>${i}</div>`;
        }
    }

    for (let y = 1; y <= proximosDias; y++) {
        dias += `<div class="fecha-siguente">${y}</div>`;
        diasMeses.innerHTML = dias;
    }
}


anterior.addEventListener("click", () => {
    fecha.setMonth(fecha.getMonth() - 1)

    renderizar()
});

siguiente.addEventListener("click", () => {
    fecha.setMonth(fecha.getMonth() + 1)

    renderizar()
});

renderizar();