
const postComentarios = document.querySelector('.divcomentarios')




export const setupComentarios = (data) => {
    if (data.length) {

        let html = ''

        data.forEach(doc => {
            const post = doc.data()

            const li = '<li class="list-group-item list-group-item-action p-3 "><div class="text-primary text-capitalize"><h5>'
            const title = post.Nombre
            const li3 = '</h5></div><div class="container border-bottom border-primary"><p>'
            const content = post.content
            const li5 = '</p></div></li>'

            html += li + title + li3 + content + li5
        })
        postComentarios.innerHTML = html


    } else {
        postComentarios.innerHTML = '<h5> No hay comentarios </h5>'

    }

}