import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="containerInput">
      <i className="fas fa-user"></i>
      <img src="github.png" alt="github logo"/>

      <p><b>Buscar Users na API</b></p>
      <input id="gitUser" type="text" placeholder="Inserir o Usuário"/>

      <button type="submit"><b>Procurar</b></button>
      <p id="error"></p>

      <div className="containerInfos">
        <p>Login: <span id="login"></span></p>
        <br/>
        <p>Nome: <span id="name"></span></p>
        <br/>
        <p>Create at: <span id="accCreated"></span></p>
        <br/>
        <span id="profIMG"></span>

        <div id="img"></div>
      </div>
    </div>
  );
}

export default Profile;