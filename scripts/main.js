import { dataSeries } from "./dataSeries.js";
//======================== Variables conectadas a HTML ========================//
var seriesTable = document.getElementById("series");
var promTable = document.getElementById("promedio");
var detalleTable = document.getElementById("detalle");
//======================== Invocar Funciones ========================//
mostrarSeries(dataSeries);
mostrarPromedioTemporadas(dataSeries);
//======================== Funciones ========================//
function mostrarSeries(series) {
    var seriesTbody = document.getElementById("series"); // Usa el tbody existente en el HTML
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.numero, "</td>\n                               <td>").concat(serie.nombre, "</td>\n                               <td>").concat(serie.plataforma, "</td>\n                               <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
}
function mostrarPromedioTemporadas(series) {
    var trElement = document.createElement("tr");
    var promedioTemporadas = calcularPromedioTemporadas(series);
    trElement.innerHTML = "<td><b>Seasons average: </b></td><td>".concat(promedioTemporadas, "</td>");
    promTable.appendChild(trElement);
}
function calcularPromedioTemporadas(series) {
    var sumTemporadas = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        sumTemporadas += serie.temporadas;
    }
    return sumTemporadas / series.length;
}
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td colspan=1><img src =\"".concat(serie.imagen, "\" height=\"100\"</td></tr>\n                            <tr><td>").concat(serie.nombre, "</td></tr>\n                            <tr><td>").concat(serie.info, "</td></tr>\n                            <tr><td>").concat(serie.link, "</td></tr>");
    detalleTable.appendChild(tbodySerie);
}
