import { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
  onSuccess: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSuccess }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/register', form);
      localStorage.setItem('token', data.token);

      onSuccess();      
      navigate('/dashboard'); 
        } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Signup</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <select
        name="gender"
        required
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <input
        type="password"
        name="password"
        placeholder="Password"
        minLength={8}
        required
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blueColor text-whiteColor py-2 rounded hover:bg-yellowColor"
      >
        {loading ? 'Creating...' : 'Signup'}
      </button>
    </form>
  );
};

export default Signup;
