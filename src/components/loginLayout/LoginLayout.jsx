// LoginLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
 
const LoginLayout = () => {
  return (
<div className="login-layout">
      {/* The Outlet will render the login component */}
<Outlet />
</div>
  );
};
 
export default LoginLayout;