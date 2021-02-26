import React from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState} from 'react'
import axios from 'axios'

const HomePage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()
  
    const onChangeEmail = (event) => {
      setEmail(event.target.value)
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value)
    }
  
    const handleSubmit = () => {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
      var urlencoded = new URLSearchParams();
      urlencoded.append("email", email);
      urlencoded.append("password", password);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };
      
      fetch("https://portaldoaluno.registrandocomgentil.com.br/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            window.open("https://portaldoaluno.registrandocomgentil.com.br/login?auth_token=" + result.authentication_token, "_blank")
            console.log(result.authentication_token)
        }) 
        .catch(error => console.log('error', error));
    }

    const onClickCursos = () => {
        history.push('/cursos')
    }
  
  
    return (
      <div className="App">
        <TextField 
          label="e-mail" 
          variant="outlined"
          value={email}
          onChange={onChangeEmail}/>
        <TextField 
          label="senha" 
          variant="outlined" 
          type="password"
          value={password}
          onChange={onChangePassword}/>
        <Button color="primary" variant="contained" onClick={handleSubmit}>ENTRAR</Button>

        <Button color="secondary" variant="contained" onClick={onClickCursos}>Cursos</Button>
      </div>
    );
}

export default HomePage