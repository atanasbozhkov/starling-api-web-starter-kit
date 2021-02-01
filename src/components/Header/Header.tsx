import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
const logo = require('../../assets/safe-logo.png');

export const Header = () =>
  <div>
    <Menu fixed='top' inverted>
      <Link to='/'>
        <Menu.Item className='headerPadding'>
          <Image src={logo} className='ui image App-logo' alt='logo' style={{width: '60px'}}/>
          <p className='brand'>AllSafe</p>
        </Menu.Item>
      </Link>
      <Menu.Menu position='right'>
        <Menu.Item onClick={() => window.location.href = '/api/logout'}>
          <h4>Logout</h4>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </div>;

export default Header;
