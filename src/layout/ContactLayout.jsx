import React from 'react';
import { Outlet } from 'react-router-dom';

const ContactLayout = () => {
  return (
    <div>
      {/* Removed <Contact /> */}
      <h2>Contact Section</h2>
      <Outlet />
    </div>
  );
};

export default ContactLayout;
