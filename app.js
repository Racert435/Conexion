// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDpTvGJDW4ta3rJGcj05N3cpwtDIg5Blfs",
  authDomain: "auto-3576f.firebaseapp.com",
  projectId: "auto-3576f",
});

var db = firebase.firestore();

function guardar() {
  var Region = document.getElementById("region").value;
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;
  var Fecha = document.getElementById("fecha").value;
  var Municipio = document.getElementById("municipio").value;
  var Clave = document.getElementById("clave").value;
  var Grado = "Educación Preescolar";

  var numpadre = Math.floor(x / y);
  var numhijo = Math.floor(x / y + 1);
  var variable = Math.floor(numpadre * y);
  var numhijo1 = Math.floor(x - variable);
  var numhijo2 = Math.floor(y - numhijo1);
  var variable2 = Math.floor(numhijo1 * numhijo);
  var variable3 = Math.floor(numhijo2 * numpadre);
  var Comprobacion = Math.floor(variable2 + variable3);
  var Comprobacion2 = Math.floor(y);

  text = numpadre;
  text1 = numhijo;
  text2 = numhijo1;
  text3 = numhijo2;
  text4 = variable2;
  text5 = variable3;
  text6 = Comprobacion;
  text7 = Comprobacion2;

  db.collection("Material de Preescolar")
    .add({
      Grado: Grado,
      Region: Region,
      Clave: Clave,
      Municipio: Municipio,
      Material: x,
      Comunidades: y,
      Fecha: Fecha,
      text: numpadre,
      text1: numhijo,
      text2: numhijo1,
      text3: numhijo2,
      text4: variable2,
      text5: variable3,
      text6: Comprobacion,
      text7: Comprobacion2,
    })

    .then((docRef) => {
      alert("Registro guardado exitosamente", docRef.id);

      document.getElementById("region").value = "";
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("fecha").value = "";
      document.getElementById("municipio").value = "";
      document.getElementById("clave").value = "";
    })
    .catch((error) => {
      console.error("Error al guardar el registro: ", error);
    });

  document.getElementById("Cargando").innerHTML = text;
  document.getElementById("Distribuir").innerHTML = text1;
  document.getElementById("Distribuir1").innerHTML = text2;
  document.getElementById("Distribuir2").innerHTML = text3;
  document.getElementById("Distribuir3").innerHTML = text4;
  document.getElementById("Distribuir4").innerHTML = text5;
  document.getElementById("Distribuir5").innerHTML = text6;
  document.getElementById("Distribuir6").innerHTML = text7;
}

function guardar1() {
  var Region = document.getElementById("region").value;
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;
  var Fecha = document.getElementById("fecha").value;
  var Municipio = document.getElementById("municipio").value;
  var Clave = document.getElementById("clave").value;
  var Grado = "Educación Primaria";

  var numpadre = Math.floor(x / y);
  var numhijo = Math.floor(x / y + 1);
  var variable = Math.floor(numpadre * y);
  var numhijo1 = Math.floor(x - variable);
  var numhijo2 = Math.floor(y - numhijo1);
  var variable2 = Math.floor(numhijo1 * numhijo);
  var variable3 = Math.floor(numhijo2 * numpadre);
  var Comprobacion = Math.floor(variable2 + variable3);
  var Comprobacion2 = Math.floor(y);

  text = numpadre;
  text1 = numhijo;
  text2 = numhijo1;
  text3 = numhijo2;
  text4 = variable2;
  text5 = variable3;
  text6 = Comprobacion;
  text7 = Comprobacion2;

  db.collection("Material de Primaria")
    .add({
      Grado: Grado,
      Region: Region,
      Clave: Clave,
      Municipio: Municipio,
      Material: x,
      Comunidades: y,
      Fecha: Fecha,
      text: numpadre,
      text1: numhijo,
      text2: numhijo1,
      text3: numhijo2,
      text4: variable2,
      text5: variable3,
      text6: Comprobacion,
      text7: Comprobacion2,
    })

    .then((docRef) => {
      alert("Registro guardado exitosamente", docRef.id);

      document.getElementById("region").value = "";
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("fecha").value = "";
      document.getElementById("municipio").value = "";
      document.getElementById("clave").value = "";
    })
    .catch((error) => {
      console.error("Error al guardar el registro: ", error);
    });

  document.getElementById("Cargando").innerHTML = text;
  document.getElementById("Distribuir").innerHTML = text1;
  document.getElementById("Distribuir1").innerHTML = text2;
  document.getElementById("Distribuir2").innerHTML = text3;
  document.getElementById("Distribuir3").innerHTML = text4;
  document.getElementById("Distribuir4").innerHTML = text5;
  document.getElementById("Distribuir5").innerHTML = text6;
  document.getElementById("Distribuir6").innerHTML = text7;
}

function guardar2() {
  var Region = document.getElementById("region").value;
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;
  var Fecha = document.getElementById("fecha").value;
  var Municipio = document.getElementById("municipio").value;
  var Clave = document.getElementById("clave").value;
  var Grado = "Educación Secundaria";

  var numpadre = Math.floor(x / y);
  var numhijo = Math.floor(x / y + 1);
  var variable = Math.floor(numpadre * y);
  var numhijo1 = Math.floor(x - variable);
  var numhijo2 = Math.floor(y - numhijo1);
  var variable2 = Math.floor(numhijo1 * numhijo);
  var variable3 = Math.floor(numhijo2 * numpadre);
  var Comprobacion = Math.floor(variable2 + variable3);
  var Comprobacion2 = Math.floor(y);

  text = numpadre;
  text1 = numhijo;
  text2 = numhijo1;
  text3 = numhijo2;
  text4 = variable2;
  text5 = variable3;
  text6 = Comprobacion;
  text7 = Comprobacion2;

  db.collection("Material de Secundaria")
    .add({
      Grado: Grado,
      Region: Region,
      Clave: Clave,
      Municipio: Municipio,
      Material: x,
      Comunidades: y,
      Fecha: Fecha,
      text: numpadre,
      text1: numhijo,
      text2: numhijo1,
      text3: numhijo2,
      text4: variable2,
      text5: variable3,
      text6: Comprobacion,
      text7: Comprobacion2,
    })

    .then((docRef) => {
      alert("Registro guardado exitosamente", docRef.id);

      document.getElementById("region").value = "";
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("fecha").value = "";
      document.getElementById("municipio").value = "";
      document.getElementById("clave").value = "";
    })
    .catch((error) => {
      console.error("Error al guardar el registro: ", error);
    });

  document.getElementById("Cargando").innerHTML = text;
  document.getElementById("Distribuir").innerHTML = text1;
  document.getElementById("Distribuir1").innerHTML = text2;
  document.getElementById("Distribuir2").innerHTML = text3;
  document.getElementById("Distribuir3").innerHTML = text4;
  document.getElementById("Distribuir4").innerHTML = text5;
  document.getElementById("Distribuir5").innerHTML = text6;
  document.getElementById("Distribuir6").innerHTML = text7;
}

// Primera Tabla
var tabla = document.getElementById("tabla");
db.collection("Material de Preescolar").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla.innerHTML += `
        <div  class="table-responsive">
        <table  class="table table-dark table-success table-hover  table-bordered">

        <tr>
        <th scope="col">Municipio</th>
        <th scope="col">Localidad</th>
        <th scope="col">Clave CCT</th>
        <th scope="col">Destinatario</th>
        <th scope="col">Fecha de registro</th>
        <th scope="col">Eliminar</th>
        <th scope="col">Editar</th>
       
      </tr>
 
  <tr>
  
  <td scope="row">${doc.data().Municipio}</td>
  <td>
    <p>${doc.data().Region}</p>
  </td>
  <td>
    <p >${doc.data().Clave}</p>
  </td>
  <td>
    <a href="#">${doc.data().Grado}</a>
  </td>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
  <td><button class="btn btn-danger" onclick="Borrar('${
    doc.id
  }');">Eliminar</button></td>
  <td><button  class="btn btn-warning" onclick="Editar('${doc.id}','${
        doc.data().Region
      }','${doc.data().Fecha}','${doc.data().Municipio}','${doc.data().Clave}')">Editar</button}</td>
</tr>


        </table>
        </div>
       
          
        `;
    });
  });
// fin de Primera Tabla


// segunda tabla
var tabl = document.getElementById("tabl");
db.collection("Material de Primaria").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tabl.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabl.innerHTML += `

      <div  class="table-responsive">
      <table  class="table table-dark table-success table-hover  table-bordered">

      <tr>
      <th scope="col">Municipio</th>
      <th scope="col">Localidad</th>
      <th scope="col">Clave CCT</th>
      <th scope="col">Destinatario</th>
      <th scope="col">Fecha de registro</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Editar</th>
     
    </tr>

<tr>

<td scope="row">${doc.data().Municipio}</td>
<td>
  <p>${doc.data().Region}</p>
</td>
<td>
  <p >${doc.data().Clave}</p>
</td>
<td>
  <a href="#">${doc.data().Grado}</a>
</td>
<td>
  <p>${doc.data().Fecha}</p>
</td>
<td><button class="btn btn-danger" onclick="Borrar2('${
  doc.id
}');">Eliminar</button></td>
<td><button class="btn btn-warning" onclick="Editar2('${doc.id}','${
      doc.data().Region
    }','${doc.data().Fecha}','${doc.data().Municipio}','${doc.data().Clave}')">Editar</button}</td>
</tr>

        
        </table>
        </div>
       
           
        `;
    });
  });
// fin de segunda tabla

// tercera tabla
var tab = document.getElementById("tab");
db.collection("Material de Secundaria").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tab.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tab.innerHTML += `
       
      <div  class="table-responsive">
      <table  class="table table-dark table-success table-hover  table-bordered">

      <tr>
      <th scope="col">Municipio</th>
      <th scope="col">Localidad</th>
      <th scope="col">Clave CCT</th>
      <th scope="col">Destinatario</th>
      <th scope="col">Fecha de registro</th>
      <th scope="col">Eliminar</th>
      <th scope="col">Editar</th>
     
    </tr>

<tr>

<td scope="row">${doc.data().Municipio}</td>
<td>
  <p>${doc.data().Region}</p>
</td>
<td>
  <p >${doc.data().Clave}</p>
</td>
<td>
  <a href="#">${doc.data().Grado}</a>
</td>
<td>
  <p>${doc.data().Fecha}</p>
</td>
<td><button class="btn btn-danger" onclick="Borrar3('${
  doc.id
}');">Eliminar</button></td>
<td><button class="btn btn-warning" onclick="Editar3('${doc.id}','${
      doc.data().Region
    }','${doc.data().Fecha}','${doc.data().Municipio}','${doc.data().Clave}')">Editar</button}</td>
</tr>

        
        </table>
        </div>

           
        `;
    });
  });
// fin de tercera tabla

// cuarta tabla
var tabla2 = document.getElementById("tabla2");
db.collection("Material de Educacion Basica")
  .get()
  .then((querySnapshot) => {
    tabla2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla2.innerHTML += ` <tr class="table-active">
        <th scope="col">Localidad</th>
        <th scope="col">Comunidades</th>
        <th scope="col">Material</th>
        <th scope="col">Acumulado</th>
        <th scope="col">Fecha de registro</th>
        
       
      </tr>
 
  <tr>
  
  <td scope="row">${doc.data().Region}</td>
  <td>
    <p>${doc.data().text2}</p>
  </td>
  <td>
    <p >${doc.data().text1}</p>
  </td>
  <td>
    <p>${doc.data().text4}</p>
  </td>
  
  
</tr>
<tr>
  <th>${doc.data().Grado}</th>
  <td>
    <p>${doc.data().text3}</p>
  </td>
  <td>
    <p>${doc.data().text}</p>
  </td>
  <td>
    <p>${doc.data().text5}</p>
  </td>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
<tr>
  <th scope="col">Total de recibos:</th>
  <td>
    <p>${doc.data().text7}</p>
  </td>

  <th>Total de material:</th>
  <td>
    <p>${doc.data().text6}</p>
  </td>
</tr>

`;
    });
  });
// fin de cuarta tabla

// quinta tabla
var tabla3 = document.getElementById("tabla3");
db.collection("Material de Preescolar").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tabla3.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla3.innerHTML += `

          <div  class="table-responsive">
          <table  class="table table-success table-hover  table-bordered">
          <thead>
          <tr class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
        </thead>
        <tbody>
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Preescolar.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
</tbody>
</table>
</div>
  `;
    });
  });
// fin de quinta tabla

//sexta tabla
var tabla4 = document.getElementById("tabla4");
db.collection("Material de Primaria").orderBy('Fecha','desc')
  .get()
  .then((querySnapshot) => {
    tabla4.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla4.innerHTML += ` 
          <div class="table-responsive">
                
          <table  class="table table-success table-hover  table-bordered">
          <tr class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Primaria.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
 
           
          </table>
  
        </div>
          
        
  
  `;
    });
  });
// fin de sexta tabla

//septima tabla
var tabla6 = document.getElementById("tabla6");
db.collection("Material de Secundaria").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tabla6.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla6.innerHTML += ` 

          <div class="table-responsive">
                
          <table class="table table-success table-hover  table-bordered">
          <tr  class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Secundaria.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
           
          </table>
  
        </div>
          
          
 
  `;
    });
  });
//fin de septima tabla

var CONTENIDO1 = document.getElementById("CONTENIDO1");
db.collection("Material de Preescolar").orderBy('Fecha', 'desc').limit(1)
  .get()
  .then((querySnapshot) => {
    CONTENIDO1.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      CONTENIDO1.innerHTML += ` 

          <div class="table-responsive">
                
          <table class="table table-success table-hover  table-bordered">
          <tr  class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Preescolar.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
           
          </table>
  
        </div>
          
          
 
  `;
    });
  });

  
var CONTENIDO2 = document.getElementById("CONTENIDO2");
db.collection("Material de Primaria").orderBy('Fecha', 'desc').limit(1)
  .get()
  .then((querySnapshot) => {
    CONTENIDO2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      CONTENIDO2.innerHTML += ` 

          <div class="table-responsive">
                
          <table class="table table-success table-hover  table-bordered">
          <tr  class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Primaria.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
           
          </table>
  
        </div>
          
          
 
  `;
    });
  });

  var CONTENIDO3 = document.getElementById("CONTENIDO3");
db.collection("Material de Secundaria").orderBy('Fecha', 'desc').limit(1)
  .get()
  .then((querySnapshot) => {
    CONTENIDO3.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      CONTENIDO3.innerHTML += ` 

          <div class="table-responsive">
                
          <table class="table table-success table-hover  table-bordered">
          <tr  class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="Secundaria.html">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
           
          </table>
  
        </div>
          
          
 
  `;
    });
  });


// busqueda por palabra clave
$(document).ready(function () {
  $("#tableSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tabla3 table").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#tableSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tabla4 table").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#tableSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tabla6 table").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#tableSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#admin table").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
// fin de busqueda por palabra clave

// borrar datos
function Borrar(id) {
  db.collection("Material de Preescolar")
    .doc(id)
    .delete()
    .then(() => {
      alert("Registro borrado exitosamente!");
      window.location.href = "tabla.html";
    })
    .catch((error) => {
      alert("Error al borrar el registro: ", error);
    });
}

function Borrar2(id) {
  db.collection("Material de Primaria")
    .doc(id)
    .delete()
    .then(() => {
      alert("Registro borrado exitosamente!");
      window.location.href = "tabla.html";
    })
    .catch((error) => {
      alert("Error al borrar el registro: ", error);
    });
}

function Borrar3(id) {
  db.collection("Material de Secundaria")
    .doc(id)
    .delete()
    .then(() => {
      alert("Registro borrado exitosamente!");
      window.location.href = "tabla.html";
    })
    .catch((error) => {
      alert("Error al borrar el registro: ", error);
    });
}
// fin de borrar datos



//Editar datos
function Editar(id, Region, Fecha, Municipio, Clave) {
  document.getElementById("region").value = Region;
  document.getElementById("fecha").value = Fecha;
  document.getElementById("municipio").value = Municipio;
  document.getElementById("clave").value = Clave;

  var btn = document.getElementById("btn-registrar");
  btn.innerHTML = "Actualizar";

  btn.onclick = function () {
    var Ref = db.collection("Material de Preescolar").doc(id);
    window.location.href="#location";
    var Region = document.getElementById("region").value;
    var Fecha = document.getElementById("fecha").value;
    var Municipio = document.getElementById("municipio").value;
    var Clave = document.getElementById("clave").value;

    return Ref.update({
      Region: Region,
      Fecha: Fecha,
      Municipio:Municipio,
      Clave:Clave,
    })
      .then(() => {
        alert("Registro actualizado correctamente!");

        btn.innerHTML = "Guardar";
        document.getElementById("region").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("municipio").value = "";
        document.getElementById("clave").value = "";
        window.location.href = "tabla.html";
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert("Error al actualizar el registro: ", error);
      });
  };
}

function Editar2(id, Region, Fecha, Municipio, Clave) {
  document.getElementById("region").value = Region;
  document.getElementById("fecha").value = Fecha;
  document.getElementById("municipio").value = Municipio;
  document.getElementById("clave").value = Clave;

  var btn = document.getElementById("btn-registrar");
  btn.innerHTML = "Actualizar";

  btn.onclick = function () {
    var Ref = db.collection("Material de Primaria").doc(id);

    var Region = document.getElementById("region").value;
    var Fecha = document.getElementById("fecha").value;
    var Municipio = document.getElementById("municipio").value;
    var Clave = document.getElementById("clave").value;

    return Ref.update({
      Region: Region,
      Fecha: Fecha,
      Municipio:Municipio,
      Clave:Clave,
    })
      .then(() => {
        alert("Registro actualizado correctamente!");

        btn.innerHTML = "Guardar";
        document.getElementById("region").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("municipio").value = "";
        document.getElementById("clave").value = "";
        window.location.href = "tabla.html";
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert("Error al actualizar el registro: ", error);
      });
  };
}

function Editar3(id, Region, Fecha, Municipio, Clave) {
  document.getElementById("region").value = Region;
  document.getElementById("fecha").value = Fecha;
  document.getElementById("municipio").value = Municipio;
  document.getElementById("clave").value = Clave;

  var btn = document.getElementById("btn-registrar");
  btn.innerHTML = "Actualizar";

  btn.onclick = function () {
    var Ref = db.collection("Material de Secundaria").doc(id);

    var Region = document.getElementById("region").value;
    var Fecha = document.getElementById("fecha").value;
    var Municipio = document.getElementById("municipio").value;
    var Clave = document.getElementById("clave").value;

    return Ref.update({
      Region: Region,
      Fecha: Fecha,
      Municipio:Municipio,
      Clave:Clave,
    })
      .then(() => {
        alert("Registro actualizado correctamente!");

        btn.innerHTML = "Guardar";
        document.getElementById("region").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("municipio").value = "";
        document.getElementById("clave").value = "";
        window.location.href = "tabla.html";
      })
      .catch((error) => {
        // The document probably doesn't exist.
        alert("Error al actualizar el registro: ", error);
      });
  };
}
// fin de Editar datos


// quinta tabla
var c1 = document.getElementById("c1");
db.collection("Material de Preescolar").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    c1.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      c1.innerHTML += `

          <div  class="table-responsive">
          <table  class="table table-success table-hover  table-bordered">
          <thead>
          <tr class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
        </thead>
        <tbody>
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="#">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
</tbody>
</table>
</div>
  `;
    });
  });
// fin de quinta tabla

//sexta tabla
var c2 = document.getElementById("c2");
db.collection("Material de Primaria").orderBy('Fecha','desc')
  .get()
  .then((querySnapshot) => {
    c2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      c2.innerHTML += ` 
          <div class="table-responsive">
                
          <table  class="table table-success table-hover  table-bordered">
          <tr class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="#">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
 
           
          </table>
  
        </div>
          
        
  
  `;
    });
  });
// fin de sexta tabla

//septima tabla
var c3 = document.getElementById("c3");
db.collection("Material de Secundaria").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    c3.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      c3.innerHTML += ` 

          <div class="table-responsive">
                
          <table class="table table-success table-hover  table-bordered">
          <tr  class="table-active">
        
          <th scope="col">Localidad</th>
          <th scope="col">Comunidades</th>
          <th scope="col">Material</th>
          <th scope="col">Acumulado</th>
        
          
         
        </tr>
   
    <tr>
    
    <td >${doc.data().Region}</td>
    <td>
      <p>${doc.data().text2}</p>
    </td>
    <td>
      <p >${doc.data().text1}</p>
    </td>
    <td>
      <p>${doc.data().text4}</p>
    </td>
    
    
  </tr>
  <tr>
    <th></th>
    <td>
      <p>${doc.data().text3}</p>
    </td>
    <td>
      <p>${doc.data().text}</p>
    </td>
    <td>
      <p>${doc.data().text5}</p>
    </td>
    
  </tr>
  <tr>
    <th scope="col">Total de recibos:</th>
    <td>
      <p>${doc.data().text7}</p>
    </td>
    
  
    <th>Total de material:</th>
    <td>
      <p>${doc.data().text6}</p>
    </td>
  </tr>

  <tr>
    <th scope="col">Municipio: </th>
    <td>
      <p>${doc.data().Municipio}</p>
    </td>
    
  
    <th>Clave CCT: </th>
    <td>
      <p>${doc.data().Clave}</p>
    </td>
  </tr>

  <tr>
  <th scope="col">Destinatario: </th>
  <td>
    <a href="#">${doc.data().Grado}</a>
  </td>
  

  <th>Fecha de registro: </th>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
</tr>
           
          </table>
  
        </div>
          
          
 
  `;
    });
  });
//fin de septima tabla