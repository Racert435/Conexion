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
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('region').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('fecha').value = '';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
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
      
      </tr>`
    });
});