import React, {Fragment} from 'react';
const Header = (props) => {
    const {headerImage} = props;
    return ( 
        <Fragment>
            <img height={150} src={headerImage} alt=''/>
        </Fragment>
        
    );
}

export default Header;