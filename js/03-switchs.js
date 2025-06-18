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

let saldo = parseFloat(localStorage.getItem("saldo")) || 100000;
const tope = 300000;

do {
  const opcion = prompt(
    "Seleciona una opcion : 1- Consultar el saldo, 2- Ingresar dinero, 3- Extraer dinero, 4- Donar a una causa"
  );

  if (opcion === null) break; // Si el usuario canceló, salir del bucle

  switch (opcion) {
    //1- Consultar el saldo
    case "1":
      alert("Su saldo es $" + saldo);
      break;
    //2- Ingresar dinero
    case "2":
      const deposito = parseFloat(
        prompt("Ingresa el monto que desea depositar!.")
      );
      if (deposito > 1000 && deposito <= 2000000) {
        console.log(deposito);
        //saldo = saldo + deposito;
        saldo += deposito;
        localStorage.setItem("saldo", saldo); // 💾 Guardar nuevo saldo
        alert(`Depositaste $${deposito}, tu saldo actual es: $${saldo}`);
      } else {
        alert("ingresaste un monto invalido");
      }
      break;
    //3- Extraer dinero
    case "3":
      const extraer = parseInt(prompt("Ingresa el monto a extraer!."));
      if (extraer <= saldo) {
        //saldo = saldo - extraer;
        saldo -= extraer;
        localStorage.setItem("saldo", saldo); // 💾 Guardar nuevo saldo
        alert(
          `El monto a extraer es $${extraer}, tu saldo actual es $${saldo}`
        );
      } else {
        alert(`Monto invalido`);
      }
      break;
    //4- Donar a una causa
    case "4":
      const donar = parseInt(prompt("Ingresa el monto a donar"));
      if (donar <= saldo) saldo -= donar;
      localStorage.setItem("saldo", saldo); // 💾 Guardar nuevo saldo
      alert(`El monto donado fue de $${donar}`);
      break;
    default:
      alert("Ingresaste una opcion erronea");
  }
} while (confirm(`Quieres realizar otra operacion`));







// con tope de extracion por sesion
 //3- Extraer dinero
    case "3":
      const extraer = parseInt(prompt("Ingresa el monto a extraer!."));

  if (isNaN(extraer) || extraer <= 0) {
    alert("Monto inválido para extraer.");
  } else if (extraer > LIMITE_EXTRACCION) {
    alert(`El monto a extraer es superior al límite por sesión. El límite es $${LIMITE_EXTRACCION}`);
  } else if (extraer > saldo) {
    alert("No tenés suficiente saldo para extraer esa cantidad.");
  } else {
    saldo -= extraer;
    localStorage.setItem("saldo", saldo);
    alert(`El monto extraído fue $${extraer}, tu saldo actual es $${saldo}`);
  }
  break;


//       if (deposito > 1000 && deposito <= 2000000)