import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = () => (
    <Menu>
      <Menu.Item link="/recent">Recent Activity</Menu.Item>
      <Menu.Item link="/team">Team Members</Menu.Item>
    </Menu>
)

export default Navbar;
