import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
import { auth } from './firebasesi.js'
import { showMessage } from './showMessage.js'





const signform = document.querySelector('#signin-form');

signform.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signform['signin-email'].value;
    const password = signform['signin-password'].value;



    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'))
        modal.hide()

        showMessage('Bienvenido ' + credentials.user.email, 'success')

    } catch (error) {
        if (error.code) {
            showMessage('Comprueba tu Correo o tu Contraseña ', "error")
        }
    }


})
