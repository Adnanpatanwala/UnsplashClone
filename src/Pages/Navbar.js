import { styled } from 'styled-components';
import { UseGlobalContext } from '../Context/AppContext';
import {BsSearch} from "react-icons/bs";
import { useEffect, useRef } from 'react';
const  NavBar = () => {
  const {searchQuery,handleChange,handleclick} = UseGlobalContext();
   

  return (
    <Wrapper>  
    <nav className="navbar navbar-light bg-light justify-content-between">
    <a className="navbar-brand">Unsplash</a>
    <form className="form-inline" onSubmit={handleclick}>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
    value={searchQuery} 
    onChange={handleChange}
    required
    />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </nav>     
  </Wrapper> 
  );
}

export default NavBar;

const Wrapper = styled.div`
nav{
  padding: 10px 15px;
  input{
    height: fit-content;

  }
}
   .form-inline{ 
    gap: 10px;
    display: flex;
    align-items: center;
   } 
 @media screen and (max-width:417px) {
  nav{ 
   .navbar-brand{ 
    margin: auto;
   } 
   .form-inline{
    margin: auto;
   }
  }
 }
`
 