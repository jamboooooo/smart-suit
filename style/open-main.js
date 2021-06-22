const openMainPage = async() => {
    const mainName = document.getElementById('main-name')
    const img = document.querySelector('a .profile')
    const data = await fetch('http:localhost:3000/user/' + nameUser.value + '/' + pass.value)
    const json = await data.json()
    console.log(json);
    console.log(1111);
    mainName.textContent = json.name + ' ' + json.last_name
    img.src = json.img
    console.log(json)
}

openMainPage()