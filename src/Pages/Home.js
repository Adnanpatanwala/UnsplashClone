import React, { useEffect, useRef } from 'react' 
import { UseGlobalContext } from '../Context/AppContext';
import Loading from "../Components/Loading"; 
import { styled } from 'styled-components';
 

const Home = () => {
    const {isLoading,data} = UseGlobalContext();
//    console.log("home");
    if(isLoading){
        return <Loading/>
    }

    if(data.length<=0){
        return <h2 style={{textAlign:"center",margin:"20px 0px"}}>No result found</h2>
    }

   else return (  
        <Wrapper> 
            <div className='home-container'> 
                {data.map((items)=>{
                    const {id,urls} = items; 
                    return (
                        <div key={id} className='image-container'> 
                            <img src={urls.small} alt="images couldn't be loaded" className='image-in img-fluid'/>
                        </div>
                    )
                })} 
                </div>
        </Wrapper>
        )
}

export default Home
const Wrapper =  styled.div`
    .image-container{
        width:  300px; 
        height: 250PX;
        margin: 10px;
    }
    .image-in{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .home-container{ 
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 15px;
    }
    .w{
        text-align: center;
        color: darkblue;
        text-transform: capitalize !important;
    }
`