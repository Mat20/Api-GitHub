import React, { AllHTMLAttributes } from 'react';

import Profile from './Profile';



const Api: React.FC<{}> = () => {

  const Profile = getInput();

  return (
  async function GitApi(getInput) {
    try {
      const response = await fetch(`https://api.github.com/users/${getInput}`)
      const json = await response.json()

      if (!response.ok) throw new Error('Usuário não foi encontrado')
      const displayBlock = document.querySelector('containerInfos').style.display = 'block'

      SendHTML(json)
      console.log(json)
    } catch (error) {
      document.querySelector('error')?.innerHTML = error.message

      setTimeout(() => {
         document.querySelector('error')?.innerHTML = ""

      }, 2500)
    }

    const button = document.querySelector('button')

        button.addEventListener('click', () => {
            const displayBlock = document.querySelector('#containerInfos').style.display = 'none'
            const user = document.querySelector('input')
            GitAPI(user.value)
            user.value = ''
        })

        function SendHTML(user) {
            let login = document.querySelector('login').innerHTML = user.login
            let name = document.querySelector('name').innerHTML = user.name
            let accCreated = document.querySelector('accCreated').innerHTML = user.created_at
            let profIMG = document.querySelector('img').innerHTML = `<img src=${user.avatar_url}>`
        }
  } 

  );
}

export default Api;