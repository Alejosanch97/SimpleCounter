//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let segundos = 0;
let segundero = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

let intervaloAnterior; // Para almacenar el intervalo anterior

const resetearContador = () => {
	segundos = -1;
	segundero = 0;
	minutos = 0;
	horas = 0;
	dias = 0;
};

const inputContador = () => {
	alert("¡Felicidades! Se ha alcanzado el tiempo meta.");
}


const incrementar = setInterval(() => {
	segundos++;

	if (segundos === 10) {
		segundero++;
		segundos = 0;
	}
	if (segundero === 6) {
		minutos++;
		segundero = 0;
	}
	if (minutos === 60) {
		horas++;
		minutos = 0;
	}
	if (horas === 24) {
		dias++;
		horas = 0;
	}

	//render your react application
	ReactDOM.render(
		<Home
			segundos={segundos}
			segundero={segundero}
			minutos={minutos}
			horas={horas}
			dias={dias}
			resetearContador={resetearContador}
			inputContador={inputContador}
            
		/>,
		document.querySelector("#app")
	);
}, 1000);