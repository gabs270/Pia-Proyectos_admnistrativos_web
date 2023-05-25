import { db } from './firebasesi.js'
import { showMessage } from './showMessage.js'
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"





const formcomentarios = document.querySelector('.formopiniones');

formcomentarios.addEventListener('submit', async e => {
    e.preventDefault()

    const nombre = formcomentarios['contactoNombreInput'].value;
    const pa = formcomentarios['contactoPAInput'].value;
    const sa = formcomentarios['contactoSAInput'].value;

    const nombreCompleto = nombre + " " + pa + " " + sa
    const comentario = formcomentarios['inputcom'].value;



    try {
        const docRef = await addDoc(collection(db, "Comentarios"), {
            Nombre: nombreCompleto,
            content: comentario
        });
        console.log("Document written with ID: ", docRef.id);
        showMessage("Mensaje publicado", "success")
    } catch (e) {
        console.error("Error adding document: ", e);
    }


})
