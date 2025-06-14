/*
Cree un programa al estilo de un cajero automatico con las siguientes opciones:
1- consultar el saldo
2- ingresar dinero
3- extraer dinero
*/
/* 
switch (opcion){
    case 1:
        todas las lineas de codigo que quiero hacer si la opcion es 1
        break
    case 2:
        todas las lineas de codigo que quiero hacer si la opcion es 1
        break
    case 3:
        todas las lineas de codigo que quiero hacer si la opcion es 1
        break
    default:
        todas las lineas que quiero ejecutar si no se cumplio ningun caso anterior
}
*/
//let saldo = localStorage.getItem("saldo");
//saldo = saldo ? parseInt(saldo) : 100000

const opcion = prompt(
  "Seleciona una opcion : 1- Consultar el saldo, 2- Ingresar dinero, 3- Extraer dinero."
);
let saldo = 100000;

switch (opcion) {
  case "1":
    alert("Su saldo es $" + saldo);
    break;
  case "2":
    const deposito = parseFloat(
      prompt("Ingresa el monto que desea depositar!.")
    );
    if (deposito > 1000 && deposito <= 2000000) {
      console.log(deposito);
      //saldo = saldo + deposito;
      saldo += deposito;
      document.writeln(
        `Depositaste $${deposito}, tu saldo actual es: $${saldo}`
      );
    } else {
      alert("ingresaste un monto invalido");
    }

    break;
  case "3":
    const extraer = parseInt(prompt("Ingresa el monto a extraer!."));
    if (extraer <= saldo) {
      //saldo = saldo - extraer;
      saldo -= deposito;
      document.writeln(
        `El monto a extraer es $${extraer}, tu saldo actual es $${saldo}`
      );
    } else {
      alert(`Monto invalido`);
    }
    break;
  default:
    alert("Ingresaste una opcion erronea");
}
