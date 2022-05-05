import React from 'react';
import AppBar from 'material-ui/AppBar';

const Navbar = () =>
    < AppBar
        title="PixaBay Image Finder"
        showMenuIconButton={false}
        position='fixed'
    />;

export default Navbar;