import React from 'react';
import PropTypes from 'prop-types';
import Menubar from '../componants/Menubar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
       <Menubar />
       <div className="content pt-10">{children}</div>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
