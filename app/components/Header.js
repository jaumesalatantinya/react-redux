import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassNmae="active">Courses</Link>
            {" | "}
            <Link to="/about" activeClassNmae="active">About</Link>
        </nav>
    );
};

export default Header;
