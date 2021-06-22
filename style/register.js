const nameUser = document.getElementById('name')
const last_name = document.getElementById('last_name')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const regBtn = document.getElementById('register-botton')

const registerNewUSer = () => {
    console.log(regBtn);
    regBtn.addEventListener('click', async() => {
        const data = await fetch('http:localhost:3000/user', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameUser.value,
                last_name: last_name.value,
                email: email.value,
                password: pass.value
            })
        })
        const json = await data.json()
        console.log(json)
        document.location.href = 'main.html'
    })
}

registerNewUSer()

module.exports = {
    nameUser,
    pass
}