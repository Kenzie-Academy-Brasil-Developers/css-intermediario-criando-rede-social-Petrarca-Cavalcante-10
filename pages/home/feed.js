let openPostBtn = document.querySelectorAll('open-post')
let bodySelect = document.getElementsByTagName('body')

function renderModal(userId) {

    for (let i = 0; i < users.length; i++) {
        if (userId == i) {
            let greyBackground = document.createElement('div')
            let modalCard = document.createElement('div')
            let profileBox = document.createElement('div')
            let divContainer = document.createElement('div')
            let figCreator = document.createElement('figure')
            let imgCreator = document.createElement('img')
            let divDesc = document.createElement('div')
            let userName = document.createElement('h3')
            let userDesc = document.createElement('p')
            
            let modalTitle = document.createElement('h4')
            let modalText = document.createElement('p')

            greyBackground.classList.add("grey-backgroud")
            modalCard.classList.add("modal-card")

            modalTitle.classList.add("post-title")
            modalText.classList.add("post-content")

            divContainer.classList.add('profile-card-organizer')
            figCreator.classList.add("profile-photo-wrapper")
            imgCreator.classList.add("sug-profile-photo")
            profileBox.classList.add('profile-card')
            divDesc.classList.add('profile-description')

            imgCreator.src = users[i].img
            userName.innerText = users[i].user
            userDesc.innerText = users[i].stack

            modalTitle.innerText = 

            figCreator.append(imgCreator)
            divDesc.append(userName, userDesc)
    
            divContainer.append(figCreator, divDesc)
            profileBox.append(divContainer)
            modalCard.append(profileBox)
            greyBackground.append(modalCard)
            bodySelect.append(greyBackground)
            
        }
    }
}

function findPoster() {
    for (let j = 0; j < posts.length; j++) {
        openPostBtn.addEventListener('click', (event) => {
            event.preventDefault()
            if (users.id == posts[j].user) {
                renderModal(users.id)
            }
        })
    }

}
