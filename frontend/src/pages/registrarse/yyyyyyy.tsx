import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  //Declaramos variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // llamar al servicio
    console.log(email, password);
    axios
      .post('https://backend-mysql-l4no.onrender.com/login', { email, password }) // Llamamos los campos de la BD
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert(' Bienvenido a EcoturismoColombia');
          navigate('/destino'); // Redirige a la página de destino
        }
      })
      .catch((err) => {
        console.log(err);
        alert('El usuario o la clave no es correcta');
      });
  };

  return (
    <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Correo</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn">Entrar</button>
        </form>
        <div className="footer">
            
            <p><a href="https://ecoturismocolombia.onrender.com/registrarse">Registrate</a></p>
        </div>
    </div>
);

}

export default Login;
