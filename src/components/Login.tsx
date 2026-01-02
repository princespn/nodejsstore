import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import "../index.css";


interface LoginProps {
  onSuccess?: () => void;
}

const Login = ({ onSuccess }: LoginProps) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/login', form);
      localStorage.setItem('token', data.token);

      onSuccess?.();         
      navigate('/dashboard'); 
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2>Login</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input  type="email" name="email" placeholder="Email" required  onChange={handleChange} className="w-full border p-2 rounded"     />

      <input    type="password" name="password"  placeholder="Password" required        onChange={handleChange} className="w-full border p-2 rounded"      />

      <button type="submit" disabled={loading}  className="w-full bg-blueColor text-whiteColor py-2 rounded hover:bg-yellowColor">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default Login;
