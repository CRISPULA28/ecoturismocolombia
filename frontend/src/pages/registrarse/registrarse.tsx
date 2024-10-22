import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registrarse.css';

export function Registrarse() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault(); // Evita que el formulario recargue la página

    try {
      // Realizar la solicitud POST al backend con los datos del usuario
      await axios.post('https://backend-mysql-l4no.onrender.com/register', {
        email,
        password,
      });
      // Mostrar mensaje de éxito o error
      alert('Registro exitoso!');
      navigate('/login', { replace: true });
    } catch (error) {
      const axiosError = error as AxiosError;
      // Manejar errores y mostrar el mensaje correspondiente
      if (axiosError.response) {
        alert(axiosError.response.statusText);
      } else {
        alert('Error al registrar el usuario');
      }
    }
  }

  return (
    <div className="registrarse-container">
      <div>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo para ingresar el correo electrónico */}
          <div className="input-group">
            <label>Correo Electrónico:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Campo para ingresar la contraseña */}
          <div className="input-group">
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registrarse;
