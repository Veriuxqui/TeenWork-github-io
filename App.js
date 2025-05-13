import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import JobsList from './components/JobsList';
import AuthForm from './components/AuthForm';
import ClientRegistrationForm from './components/ClientRegistrationForm';
import UserTypeSelector from './components/UserTypeSelector';
import UserProfileCard from './components/UserProfileCard';
import SupportButton from './components/SupportButton';
import SupportModal from './components/SupportModal';
import ClientDashboard from './components/ClientDashboard';
import { users } from './mock/users';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [loggedIn, setLoggedIn] = useState(false);
  const [authStage, setAuthStage] = useState('select');
  const [userType, setUserType] = useState('student');
  const [currentUser, setCurrentUser] = useState(null);
  const [showSupport, setShowSupport] = useState(false);

  const handleUserTypeSelect = (type) => {
    if (type === 'login') {
      setAuthStage('login');
    } else {
      setUserType(type);
      setAuthStage(type === 'student' ? 'register' : 'client-register');
    }
  };

  const handleLogin = (email) => {
    const user = users.find(u => u.email === email);
    setCurrentUser(user);
    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LayoutHeader user={currentUser} userType={userType} />
      <main className="pt-6 pb-12">
        {!loggedIn && authStage === 'select' && (
          <UserTypeSelector onSelect={handleUserTypeSelect} />
        )}
        {!loggedIn && authStage === 'login' && (
          <AuthForm 
            setLoggedIn={handleLogin}
            userType={userType}
          />
        )}
        {!loggedIn && authStage === 'register' && (
          <AuthForm 
            setLoggedIn={handleLogin}
            userType={userType}
            defaultRegister
          />
        )}
        {!loggedIn && authStage === 'client-register' && (
          <ClientRegistrationForm 
            setLoggedIn={handleLogin}
          />
        )}
        {loggedIn && userType === 'student' && currentPage === 'jobs' && <JobsList />}
        {loggedIn && userType === 'student' && currentPage === 'profile' && <UserProfileCard userId={currentUser?.id} userType={userType} />}
        {loggedIn && userType === 'employer' && <ClientDashboard />}
        
        {loggedIn && <SupportButton onClick={() => setShowSupport(true)} />}
        {showSupport && <SupportModal onClose={() => setShowSupport(false)} />}
      </main>
    </div>
  );
};

export default App;

// DONE