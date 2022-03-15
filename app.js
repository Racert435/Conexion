// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDpTvGJDW4ta3rJGcj05N3cpwtDIg5Blfs",
    authDomain: "auto-3576f.firebaseapp.com",
    projectId: "auto-3576f"
  });
  
  var db = firebase.firestore();

 

function guardar(){
    var Region=document.getElementById('region').value;
    var Material=document.getElementById('num1').value;
    var Comunidad=document.getElementById('num2').value;
    var Fecha=document.getElementById('fecha').value;

    db.collection("Material por comunidad").add({
        Region:Region,
        Material: Material,
        Comunidades: Comunidad,
        Fecha: Fecha,
        
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

}

//Leer base
var tabla=document.getElementById('tabla');
db.collection("Material por comunidad").get().then((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML += `<tr>
        <th scope="row">${doc.data().Region}</th>
        <td>${doc.data().Material}</td>
        <td>${doc.data().Comunidades}</td>
        <td>${doc.data().Fecha}</td>
        <td><button class="btn btn-danger" onclick="Borrar('${doc.id}');">Eliminar</button></td>
        <td><button class="btn btn-warning" onclick="Editar('${doc.id}','${doc.data().Region}','${doc.data().Material}','${doc.data().Comunidades}')">Editar</button}</td>
      
      </tr>`
    });
});

var tabla2=document.getElementById('tabla2');
db.collection("Material por comunidad").get().then((querySnapshot) => {
    tabla2.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla2.innerHTML += `<tr>
        <th scope="row">${doc.data().Region}</th>
        <td>${doc.data().Material}</td>
        <td>${doc.data().Comunidades}</td>
        <td>${doc.data().Fecha}</td>
        
      
      </tr>`
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
        
    
        function Editar(id,Region,Material,Comunidad){
    
            document.getElementById('region').value=Region;
            document.getElementById('num1').value=Material;
            document.getElementById('num2').value=Comunidad;
        
            var btn=document.getElementById('btn-registrar');
            btn.innerHTML='Actualizar';
            
            btn.onclick=function(){
    
    
        var Ref = db.collection("Material por comunidad").doc(id);
    
        var Region=document.getElementById('region').value;
        var Material=document.getElementById('num1').value;
        var Comunidad=document.getElementById('num2').value;
        
        return Ref.update({
            Region:Region,
        Material: Material,
        Comunidades: Comunidad,
        })
        .then(() => {
            alert("Registro actualizado correctamente!");
            btn.innerHTML='Guardar';
            document.getElementById('region').value = '';
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
        })
        .catch((error) => {
            // The document probably doesn't exist.
           alert("Error al actualizar el registro: ", error);
        });
            }
    
        
        }