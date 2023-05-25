import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth, db } from './firebasesi.js'
import { showMessage } from './showMessage.js'
import { addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"


const googlebutton = document.querySelector('#googlelogin')

googlebutton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)


        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'))
        modal.hide()

        showMessage('Bienvenido ' + credentials.user.displayName, 'success')

        try {
            const miColeccionRef = collection(db, credentials.user.uid);
            const querySnapshot = await getDocs(miColeccionRef);
            if (querySnapshot.docs.length > 0) {

            } else {
                console.log('La colección no existe, agregando un nuevo documento...');
                const docRef = await addDoc(collection(db, credentials.user.uid), {
                    title: "Holaaa!!!. Para usuarios nuevos, aqui podrás ver los pedidos que harás proximamente",
                    content: " "
                }); console.log("Document written with ID: ", docRef.id);
            }
        } catch (error) {
            console.error('Error al agregar el documento: ', error);
        }

    } catch (error) {
        console.log(error)
    }
})


