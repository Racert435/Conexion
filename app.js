// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDpTvGJDW4ta3rJGcj05N3cpwtDIg5Blfs",
    authDomain: "auto-3576f.firebaseapp.com",
    projectId: "auto-3576f"
  });
  
  var db = firebase.firestore();

 

function guardar(){
    

    var Region=document.getElementById('region').value;
    var x=document.getElementById('num1').value;
    var y=document.getElementById('num2').value;
    var Fecha=document.getElementById('fecha').value;

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


    db.collection("Material por comunidad").add({
        Region:Region,
        Material: x,
        Comunidades: y,
        Fecha: Fecha,
        text : numpadre,
        text1 : numhijo,
        text2 : numhijo1,
        text3 : numhijo2,
        text4 : variable2,
        text5 : variable3,
        text6 : Comprobacion,
        text7 : Comprobacion2,
        
    })
    .then((docRef) => {
        alert("Registro guardado exitosamente", docRef.id);
        document.getElementById('region').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('fecha').value = '';
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

//Leer base
var tabla=document.getElementById('tabla');
db.collection("Material por comunidad").get().then((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `
       
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Comunidades</th>
              <th scope="col">Material</th>
              <th scope="col">Acumulado</th>
              <th scope="col">Fecha de registro</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
             
            </tr>
       
        <tr>
        
        <th scope="row">${doc.data().Region}</th>
        <td>
          <p>${doc.data().text2}</p>
        </td>
        <td>
          <p >${doc.data().text1}</p>
        </td>
        <td>
          <p>${doc.data().text4}</p>
        </td>
        <td>
          <p>${doc.data().Fecha}</p>
        </td>
        <td><button class="btn btn-danger" onclick="Borrar('${doc.id}');">Eliminar</button></td>
        <td><button class="btn btn-warning" onclick="Editar('${doc.id}','${doc.data().Region}','${doc.data().Fecha}')">Editar</button}</td>
      </tr>
      <tr>
        <td></td>
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

        <td>Total de material:</td>
        <td>
          <p>${doc.data().text6}</p>
        </td>
      </tr>
      <tr>
        `
    });
});

var tabla2=document.getElementById('tabla2');
db.collection("Material por comunidad").get().then((querySnapshot) => {
    tabla2.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla2.innerHTML += ` <tr>
        <th scope="col">Region</th>
        <th scope="col">Comunidades</th>
        <th scope="col">Material</th>
        <th scope="col">Acumulado</th>
        <th scope="col">Fecha de registro</th>
        
       
      </tr>
 
  <tr>
  
  <th scope="row">${doc.data().Region}</th>
  <td>
    <p>${doc.data().text2}</p>
  </td>
  <td>
    <p >${doc.data().text1}</p>
  </td>
  <td>
    <p>${doc.data().text4}</p>
  </td>
  <td>
    <p>${doc.data().Fecha}</p>
  </td>
  
</tr>
<tr>
  <td></td>
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

  <td>Total de material:</td>
  <td>
    <p>${doc.data().text6}</p>
  </td>
</tr>
<tr>`
    });
});


//borrar datos

function Borrar(id){
    

    db.collection("Material por comunidad").doc(id).delete().then(() => {
        alert("Registro borrado exitosamente!");
        
    }).catch((error) => {
        alert("Error al borrar el registro: ", error);
    });
    }
    
        //Editar datos
        
    
        function Editar(id,Region,Fecha){
    
            document.getElementById('region').value=Region;
            document.getElementById('fecha').value=Fecha;
            
        
            var btn=document.getElementById('btn-registrar');
            btn.innerHTML='Actualizar';
            
            btn.onclick=function(){
    
    
        var Ref = db.collection("Material por comunidad").doc(id);
    
        var Region=document.getElementById('region').value;
        var Fecha=document.getElementById('fecha').value;
       
        
        return Ref.update({
            Region:Region,
        Fecha: Fecha,
       
        })
        .then(() => {
            alert("Registro actualizado correctamente!");
            btn.innerHTML='Guardar';
            document.getElementById('region').value = '';
            document.getElementById('fecha').value = '';
           
        })
        .catch((error) => {
            // The document probably doesn't exist.
           alert("Error al actualizar el registro: ", error);
        });
            }
    
        
        }