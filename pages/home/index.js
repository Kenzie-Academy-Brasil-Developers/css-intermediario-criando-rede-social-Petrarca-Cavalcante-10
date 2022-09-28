let ulSu = document.getElementById('ulSuggestions')
const users = [
    {
        id: 1,
        user: "Samuel Leão",
        stack: "Front end Engineer",
        img: "../../assets/img/user1.svg",
    },
    {
        id: 2,
        user: "Samuel Persuhn",
        stack: "Front end Engineer",
        img: "../../assets/img/user2.svg",
    },
    {
        id: 3,
        user: "Carlos Lima",
        stack: "UX e UI Designer",
        img: "../../assets/img/user3.svg",
    },
    {
        id: 4,
        user: "Carla Maria",
        stack: "Back end Engineer",
        img: "../../assets/img/user4.svg",
    },
]

function renderSuggestions(users) {

    for (let i = 0; i < users.length; i++) {
        let divContainer = document.createElement('div')
        let liCreator = document.createElement('li')
        let figCreator = document.createElement('figure')
        let imgCreator = document.createElement('img')
        let divDesc = document.createElement('div')
        let userName = document.createElement('h3')
        let userDesc = document.createElement('p')
        let followBtn = document.createElement('button')
        
        divContainer.classList.add('profile-card-organizer')
        figCreator.classList.add("profile-photo-wrapper")
        imgCreator.classList.add("sug-profile-photo")
        liCreator.classList.add('profile-card')
        divDesc.classList.add('profile-description')
        followBtn.classList.add('suggest-follow-btn')

        followBtn.innerText = "Seguir"
        followBtn.addEventListener('click', (event)=>{
            event.preventDefault()
            
            if (followBtn.innerText == "Seguir") {
                followBtn.innerText = "Seguindo"
                followBtn.style.background = "var(--color-blue-1)"
                followBtn.style.color = "var(--color-white-fixed)"
            } else {
                followBtn.innerText = "Seguir"
                followBtn.style.background = "var(--color-white-fixed)"
                followBtn.style.color = "var(--color-grey-1)"
            }
        })

        imgCreator.src = users[i].img
        userName.innerText = users[i].user
        userDesc.innerText = users[i].stack

        figCreator.append(imgCreator)
        divDesc.append(userName, userDesc)

        divContainer.append(figCreator, divDesc)
        liCreator.append(divContainer, followBtn)
        ulSu.append(liCreator)
    }
}

renderSuggestions(users)