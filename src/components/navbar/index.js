import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext';

const Navbar = () => {
    const navigator = useNavigate();
    const { isAuth, setAuth } = useAuth()

  return (
    <nav class="navbar_std">
          <header class="d-flex justify-space-bw align-center">
            <div class="brandName" onClick={()=> navigator('/')}><span className='grey-color'>U</span>Tube</div>
            <div className='nav-right-box d-flex gap-1'>
                {
                      !isAuth ? <button class="btn default" onClick={() => navigator('/login')}>Login</button> :
                      <button class="btn danger" onClick={()=> setAuth(false)}>Logout</button>
                } 
                  {isAuth && ( <div class="avatar" onClick={() => navigator('/profile')}>
                          <i class="fa fa-user" aria-hidden="true"></i>
                  </div>)
                }
            </div>
             
        </header>
  </nav>
  )
}

export default Navbar