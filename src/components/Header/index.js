import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StyleHeader from './style'



const Header = (props) => {
    
    return (
     <StyleHeader>
         <nav color='#222222'>
             <div className='nav-brand'>
                 Conecte+
             </div>

             <ul>
                 <li>
                     <Link>Escolas</Link>
                 </li>
                 <li>
                     <Link>Parceiros</Link>
                 </li>
                 <li>
                     <Link className='button'>Torne-se um parceiro</Link>
                 </li>
                 <li>
                     <Link className='button bg-black'>Registre sua escola</Link>
                 </li>
             </ul>
         </nav> 
     </StyleHeader>   
    )
}

export default Header
