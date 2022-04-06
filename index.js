document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#imprimir1");
  $boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.querySelector("#pdf"); // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 1,
        filename: "documento.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait", // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch((err) => console.log(err));
  });
});


function myFunction() {
  var x,
    y,
    numpadre,
    numhijo,
    text,
    text1,
    text2,
    text3,
    numhijo1,
    numhijo2,
    variable,
    variable2,
    variable3,
    text4,
    text5,
    Comprobacion,
    text6,
    Comprobacion2,
    text7;

  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;
  if (isNaN(x) || isNaN(y)) {
    text = "Es necesarios introducir dos números válidos";
  } else {
    numpadre = Math.floor(x / y);
    numhijo = Math.floor(x / y + 1);
    variable = Math.floor(numpadre * y);
    numhijo1 = Math.floor(x - variable);
    numhijo2 = Math.floor(y - numhijo1);
    variable2 = Math.floor(numhijo1 * numhijo);
    variable3 = Math.floor(numhijo2 * numpadre);
    Comprobacion = Math.floor(variable2 + variable3);
    Comprobacion2 = Math.floor(y);

    text = numpadre;
    text1 = numhijo;
    text2 = numhijo1;
    text3 = numhijo2;
    text4 = variable2;
    text5 = variable3;
    text6 = Comprobacion;
    text7 = Comprobacion2;
  }
  document.getElementById("Cargando").innerHTML = text;
  document.getElementById("Distribuir").innerHTML = text1;
  document.getElementById("Distribuir1").innerHTML = text2;
  document.getElementById("Distribuir2").innerHTML = text3;
  document.getElementById("Distribuir3").innerHTML = text4;
  document.getElementById("Distribuir4").innerHTML = text5;
  document.getElementById("Distribuir5").innerHTML = text6;
  document.getElementById("Distribuir6").innerHTML = text7;
}



function repartir(){
  var x,
    y,
    numpadre,
    numhijo,
    text,
    text1,
    text2,
    text3,
    numhijo1,
    numhijo2,
    variable,
    variable2,
    variable3,
    text4,
    text5,
    Comprobacion,
    text6,
    Comprobacion2,
    text7,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,i;

  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;
 
    numpadre = Math.floor(x / y);
    numhijo = Math.floor(x / y + 1);
    variable = Math.floor(numpadre * y);
    numhijo1 = Math.floor(x - variable);
    numhijo2 = Math.floor(y - numhijo1);
    variable2 = Math.floor(numhijo1 * numhijo);
    variable3 = Math.floor(numhijo2 * numpadre);
    Comprobacion = Math.floor(variable2 + variable3);
    Comprobacion2 = Math.floor(y);

    text = numpadre;
    text1 = numhijo;
    text2 = numhijo1;
    text3 = numhijo2;
    text4 = variable2;
    text5 = variable3;
    text6 = Comprobacion;
    text7 = Comprobacion2;
    
    
    


    for(i=1;i<=numhijo1;i++){
      
      document.getElementById("comu1").innerHTML = numhijo;
    
    
     
    
    } 

    var w=i;
    var m=y;

    for(var j=w; j<=m ; j++){
      
      document.getElementById("comu2").innerHTML = numpadre;
     
    }
    
    


  
  
}




 