// const api = async () => {
//   const response = await fetch('https://api.github.com/users/Kirill-Leonidovich/repos/owner/')
//   const data = await response.json()

//   console.log(data);
//   // document._body.insertAdjace/ntHTML('afterbegin', `<img src="${data.avatar_url}" alt="${data.name}">`)
// }

// api()



const skils = Array.from(document.querySelectorAll('.skils__item'))

skils.forEach(skil => {
  skil.addEventListener('click', (event) => {
    event.currentTarget.classList.add('_focuses')

    skils
      .filter(skil => skil !== event.currentTarget)
      .forEach(skil => skil.classList.remove('_focuses'))
  })
})