
const postlist = document.querySelector('.posts')




export const setupPosts = (data) => {
    if (data.length) {

        let html = ''

        data.forEach(doc => {
            const post = doc.data()

            const li = '<li class="list-group-item list-group-item-action "><h5>'
            const title = post.title
            const li3 = '</h5><div class="container"><img src="'
            const content = post.content
            const li5 = '" class="w-100"></div></li>'

            html += li + title + li3 + content + li5
        })
        postlist.innerHTML = html


    } else {
        postlist.innerHTML = '<h5> Está vacio </h5>'

    }

}