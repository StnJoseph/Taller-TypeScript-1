import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";
 
//======================== Variables conectadas a HTML ========================//
let seriesTable: HTMLElement = document.getElementById("series")!;
let promTable: HTMLElement = document.getElementById("promedio")!;
let detalleTable: HTMLElement = document.getElementById("detalle")!;

//======================== Invocar Funciones ========================//
mostrarSeries(dataSeries);
mostrarPromedioTemporadas(dataSeries);

//======================== Funciones ========================//
function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.getElementById("series")!; // Usa el tbody existente en el HTML
    for (let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.numero}</td>
                               <td>${serie.nombre}</td>
                               <td>${serie.plataforma}</td>
                               <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
}

function mostrarPromedioTemporadas(series: Serie[]): void{
    let trElement: HTMLElement = document.createElement("tr");
    let promedioTemporadas: number = calcularPromedioTemporadas(series);
    trElement.innerHTML = `<td><b>Seasons average: </b></td><td>${promedioTemporadas}</td>`;
    promTable.appendChild(trElement);
}

function calcularPromedioTemporadas(series: Serie[]): number{
    let sumTemporadas = 0;
    
    for (let index = 0; index < series.length; index++)
    {
        let serie: Serie = series[index];
        sumTemporadas += serie.temporadas
    }
    return sumTemporadas/series.length
}

function mostrarDatosSerie(serie: Serie): void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = `<tr><td colspan=1><img src ="${serie.imagen}" height="100"</td></tr>
                            <tr><td>${serie.nombre}</td></tr>
                            <tr><td>${serie.info}</td></tr>
                            <tr><td>${serie.link}</td></tr>`
    detalleTable.appendChild(tbodySerie);
}