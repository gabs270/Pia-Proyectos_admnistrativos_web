import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
import { auth, db } from './firebasesi.js'
import { showMessage } from './showMessage.js'
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"

const signupform = document.querySelector('#signup-form')


signupform.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupform['signup-email'].value
    const password = signupform['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        const signupmodal = document.querySelector('#signupmodal')
        const modal = bootstrap.Modal.getInstance(signupmodal)
        modal.hide()

        showMessage("Bienvenido, " + userCredentials.user.email, "success")



        //crear base de datos que lleva el nombre del id del usuario que se acaba de crear

        try {
            const docRef = await addDoc(collection(db, userCredentials.user.uid), {
                title: "Holaaa!!!. Para usuarios nuevos, aqui podrás ver los pedidos que harás proximamente",
                content: " "
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    } catch (error) {

        if (error.code === 'auth/internal-error') {
            showMessage('Email Invalido', "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage('Contraseña muy corta', "error")
        } else if (error.code) {
            showMessage('Algo salió mal', "error")
        }

    }


})