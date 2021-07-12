import React from 'react';

import { PowerOff } from '@styled-icons/fa-solid/PowerOff';

const Logout = () => {
  const handleLogout = () => {
    window.location.reload();
    localStorage.removeItem('username');
    localStorage.removeItem('ageCheck');
  };

  return (
    <PowerOff
      className='poweroff-icon'
      type='button'
      aria-roledescription='button'
      onClick={handleLogout}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Logout;
