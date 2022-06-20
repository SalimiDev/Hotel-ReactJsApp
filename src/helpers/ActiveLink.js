import { NavLink } from 'react-router-dom';

const ActiveLink = props => {
    const activeStyle = {
        backgroundColor: props.bgcolor || '#344a71',
        color: props.color || '#fff',
    };
    return  <NavLink 
                    {...props} 
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                </NavLink>;
};

export default ActiveLink;
