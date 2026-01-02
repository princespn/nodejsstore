import { useState, useEffect } from 'react';
import { Logo } from "../assets/images/images";
import { useNavigate } from 'react-router-dom';

import Button from "./Button";
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import api from '../api/api';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (e) {
      console.warn('Backend logout failed, clearing session anyway');
    } finally {
      localStorage.removeItem('token');
      navigate('/'); 

      setIsAuthenticated(false);
    }
  };

  return (
    <nav className="w-screen p-8 bg-whiteColor lg:px-24 lg:py-8 lg:flex lg:items-center lg:justify-between">

      <div className="shrink-0 w-40 cursor-pointer">
        <img className="w-full h-full" src={Logo} alt="Logo" />
      </div>

      <div className="hidden lg:flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Button
              title="Sign up"
              titleClassName="hover:text-yellowColor"
              onClick={() => setShowSignup(true)}
            />
            <Button
              title="Log in"
              mainClassName="bg-blueColor hover:bg-yellowColor"
              titleClassName="text-whiteColor"
              onClick={() => setShowLogin(true)}
            />
          </>
        ) : (
          <Button
            title="Logout"
            mainClassName="bg-red-500 hover:bg-red-600"
            titleClassName="text-whiteColor"
            onClick={handleLogout}
          />
        )}
      </div>

      <Modal isOpen={showSignup} onClose={() => setShowSignup(false)}>
        <Signup
          onSuccess={() => {
            setShowSignup(false);
            setIsAuthenticated(true);
          }}
        />
      </Modal>

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <Login
          onSuccess={() => {
            setShowLogin(false);
            setIsAuthenticated(true);
          }}
        />
      </Modal>

    </nav>
  );
};

export default Navbar;
