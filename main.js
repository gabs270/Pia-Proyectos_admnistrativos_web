import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
import { auth, db } from './app/firebasesi.js'
import { logincheck } from './app/loginCheck.js'
import { setupPosts } from './app/postlist.js'
import { setupComentarios } from './app/publicarcomentarios.js'


import './app/signupformsi.js'
import './app/signinFrom.js'
import './app/googlelogin.js'
import './app/logout.js'



onAuthStateChanged(auth, async (user) => {
        if (user) {

                const querySnapshot = await getDocs(collection(db, user.uid))
                setupPosts(querySnapshot.docs)

                const querySnapshotcomentarios = await getDocs(collection(db, "Comentarios"))
                setupComentarios(querySnapshotcomentarios.docs)

        } else {
                setupPosts([])

        }
        logincheck(user)


})