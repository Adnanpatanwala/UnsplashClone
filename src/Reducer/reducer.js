import { act } from "react-dom/test-utils";
import {fetched_data,
    is_Loading,
    search_query,
    fetched_data_search,
    IncreasePgcount,
    DecreasePgcounts,
    pageClicked,
    IncreaseCountSearch,
    DecreaseCountSearch,
    changepagetozero,
    pageClickedSearch,
} from "../Helper";

export const reducer  = (state,action) =>{
    
    if(action.type===fetched_data){
        return {...state, data:action.playLoad,isLoading:false};
    }
    if(action.type===is_Loading){
        return {...state,isLoading:true};
    }
    if(action.type===search_query){ 
        return {...state,searchQuery:action.playLoad};

    }
    if(action.type===fetched_data_search){
        return {...state,data:action.playLoad.results,isLoading:false};
    }
    if(action.type===IncreasePgcount){     
        if((state.pagecount)%3==0 ){ 
            return {...state,pagecount:action.playLoad+1,count:state.pagecount+1};
        } else{
            return {...state,pagecount:action.playLoad+1};
        } 
    }
    if(action.type===DecreasePgcounts){    
        let c = action.playLoad;
        c>1?c--:c=1;
        if((state.pagecount-1)%3==0){  
            return{...state, pagecount:c,count:state.pagecount-3>=1?state.pagecount-3:1};
        } else{
            return {...state,pagecount:c};
        } 
    }
    if(action.type===pageClicked){
        return {...state, pagecount:parseInt(action.playLoad)};
    }
    if(action.type===pageClickedSearch){
        return {...state, pagecountSearch:parseInt(action.playLoad)};
    }
    if(action.type===DecreaseCountSearch){ 
        let c = action.playLoad;
        c>1?c--:c=1;
        if((state.pagecountSearch-1)%3==0){  
            return{...state, pagecountSearch:c,count:state.pagecountSearch-3>=1?state.pagecountSearch-3:1};
        } else{
            return {...state,pagecountSearch:c};
        } 
    }
    if(action.type===IncreaseCountSearch){
        
            if((state.pagecountSearch)%3==0 ){ 
                return {...state,pagecountSearch:action.playLoad+1,count:state.pagecountSearch+1};
            } else{
                return {...state,pagecountSearch:action.playLoad+1};
            }
    }
    if(action.type=== changepagetozero){
        return {...state,pagecountSearch:1};
    }
throw new Error("Error hai bhai");
}