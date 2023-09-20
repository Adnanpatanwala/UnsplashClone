import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {reducer} from "../Reducer/reducer";
import {fetched_data,
    is_Loading,
    search_query,
    fetched_data_search,
    IncreasePgcount,
    DecreasePgcounts,
    pageClicked,
    IncreaseCountSearch,
    DecreaseCountSearch,
    pageClickedSearch,
    changepagetozero
} from '../Helper' 


const initialstate = {
    searchQuery:"",
    isLoading :false,
    data : [],
    pagecount:1,
    pagecountSearch:1,
    count : 1,
}


const Appcontext = createContext();
const url = "https://api.unsplash.com/photos/?client_id="; 
const searchurl = "https://api.unsplash.com/search/photos/?client_id=";

export const AppContext = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialstate);
    const fetching = async(URL)=>{

        dispatch({type:is_Loading});
        try {
            const req = await fetch(URL);
            const res = await req.json(); 
                dispatch({type:fetched_data,playLoad:res});
        }catch (error) {
            console.log(error);
        }
    } 

        

    useEffect(()=>{ 
        fetching(`${url}${process.env.REACT_APP_ID}&page=${state.pagecount}`);
    },[state.pagecount]);
    
     
    const handleChange = useCallback((e)=>{ 
        let ans = e.target.value;
        dispatch({type:search_query,playLoad:ans});
    })
 
    const handleclick = useCallback((e)=>{
        e.preventDefault(); 
        dispatch({type:changepagetozero});
        searchFetching();
    })

    const searchFetching = async() => {
        dispatch({type:is_Loading});
        try {
            const req = await fetch(`${searchurl}${process.env.REACT_APP_ID}&query=${state.searchQuery}&page=${state.pagecountSearch}`);
            const res = await req.json();
                dispatch({type:fetched_data_search,playLoad:res});
        }catch (error) {
            console.log(error); 
        }
    }

    useEffect(()=>{
        if(state.searchQuery){
            searchFetching();
        }
    },[state.pagecountSearch]);

    const increasePgcount = () =>{
        if(state.searchQuery){
            dispatch({type:IncreaseCountSearch,playLoad:state.pagecountSearch});
        }else { 
            dispatch({type:IncreasePgcount,playLoad:state.pagecount});
        }
    }

    const decreasePgcount = () =>{
        if(state.searchQuery){
            dispatch({type:DecreaseCountSearch,playLoad:state.pagecountSearch});
        }else {
            dispatch({type:DecreasePgcounts,playLoad:state.pagecount});
        }
    }

    const pageClick = (e) =>{
        let n = e.target.value;
        if(state.searchQuery){
           dispatch({type:pageClickedSearch,playLoad:n});
        }else dispatch({type:pageClicked,playLoad:n});
    }

  return ( 
    <Appcontext.Provider value={{
        ...state,
        handleChange,
        handleclick,
        increasePgcount,
        decreasePgcount,
        pageClick,
    }}>
        {children}
    </Appcontext.Provider>
  )
}


export const UseGlobalContext = () =>{
    return useContext(Appcontext);
}
