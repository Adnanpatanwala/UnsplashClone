import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { UseGlobalContext } from '../Context/AppContext'

const Page = () => {
    const {decreasePgcount,increasePgcount,pagecount,pageClick,pagecountSearch,searchQuery,count} = UseGlobalContext(); 
    let checkpage = 1;
    if(searchQuery){
      checkpage  =  pagecountSearch;
    }else checkpage = pagecount;

   
  return ( 
    <Wrapper> 
      <nav aria-label="Page navigation example" className='navigation'>
  <ul className="pagination">
    <li className="page-item">
      <button className="page-link" onClick={()=>decreasePgcount()}>Previous</button>
      </li>
    <li className="page-item">
      <button className={checkpage==count?"page-link active-page":"page-link"} value={count} onClick={pageClick}>{count}</button>
      </li>
    <li className="page-item">
      <button className={checkpage==count+1?"page-link active-page":"page-link"} value={count+1} onClick={pageClick}>{count+1}</button>
      </li>
    <li className="page-item">
      <button className={checkpage==count+2?"page-link active-page":"page-link"}  value={count+2} onClick={pageClick}>{count+2}</button>
      </li>
    <li className="page-item">
      <button className="page-link" onClick={()=>increasePgcount()}>Next</button>
      </li>
  </ul>
</nav>
    </Wrapper>
  )
}

export default Page

const Wrapper = styled.div`
.navigation{
  margin: 10px 0px;
  display: flex;
  justify-content: center;
}
.active-page{
  color: white;
  background: #0d6efd;
}
`