import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  console.log('about');
  return (
    <>
      <h3>About page</h3>
      <div>My test app with using react-route</div>
      <ul>
        <li style={{ listStyleType: 'none' }}>
          <Link to='contacts'>Contacts</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link to='team'>team</Link>
        </li>
      </ul>

      <Outlet />
      {/* <Routes> */}
      {/*   <Route path='contacts' element={<p>Our contacts</p>} /> */}
      {/*   <Route path='team' element={<p>Our team</p>} /> */}
      {/* </Routes> */}
    </>
  );
};

export { About };
