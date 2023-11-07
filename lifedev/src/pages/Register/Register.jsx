import React, { useState } from 'react'

const [displayName, setDisplayName] = useState('')
const [emailUsuario, setEmailUsuario] = useState('')
const [senhaUsuario, setSenhaUsuario] = useState('')
const [confirmaSenha, setConfirmaSenha] = useState('')
const [erro, setErro] = useState('')


const Register = () => {
  return (
    <div>
      <h1>Cadastro de LifeDevelopers</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input type ="text" name = "displayName" placeholder = "Digite seu nome de usuário" required />
        </label>
        <label>
          <span>E-mail:</span>
          <input type ="email" name = "emailUsuario" placeholder = "Entre com seu e-mail" required />
        </label>
        <label>
          <span>Senha:</span>
          <input type ="password" name = "senhaUsuario" placeholder = "Entre com uma senha segura" required />
        </label>
        <label>
          <span>Confirmação:</span>
          <input type ="password" name = "confirmaSenha" placeholder = "Confirme sua senha" required />
        </label>

        <button className ='btn'>Cadastrar</button>
        
      </form>
    </div>
  )
}

export default Register