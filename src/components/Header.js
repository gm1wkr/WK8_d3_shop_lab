import React from 'react';
import UserDetails from './UserDetail';
import styled from 'styled-components';


const HeadArea = styled.header`
    text-align: center;
    background-color: #00ffcc;
    padding: 2rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
`

const Header = ({ user }) => {
    return(
        <HeadArea>
            <h1>Viking Snapping Plants</h1>
            <UserDetails user={user}/>
        </HeadArea>
    )
}

export default Header;