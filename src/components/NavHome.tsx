import {IoMdCloseCircleOutline} from 'react-icons/io'
import {BiAlignRight} from 'react-icons/bi'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const NavHome = () => {
  const [isClick, setIsClick] = useState(false);
  const location = useLocation();

  //para el toogle true o false
  const onToggleNavBar = ()=>{
    setIsClick(!isClick);
  }

  const navData = [
    {
      name: "Inicio",
      path: "/home"
    },
    {
      name: "Informacion",
      path: "/information"
    },
    {
      name: "Contacts",
      path: "/contacts"
    }
  ]

  return (
    <header className="bg-header h-auto">
      <div className="max-w-7xl mx-auto md:px-4 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center h-auto md:w-[308px] w-[230px]">
            <img src="../../../assets/logo-ministerio.png" alt="logo-ministro" />
          </div>
          <div className="hidden md:block pr-10">
            <div className="ml-4 flex items-center space-x-4">
              {
                navData.map((value)=>(
                  <div key={value.name} className={`${(location.pathname === value.path)&& "border-b-4 border-b-header-500"} font-semibold text-white px-6 py-3 text-2xl`}>
                    <Link to={value.path} >
                      {value.name}
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
            <div className="md:hidden flex items-center">
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={()=>onToggleNavBar()}
                >
                {
                  isClick?(
                    <IoMdCloseCircleOutline width={80} height={80}/>
                  ):(
                    <BiAlignRight />
                  )
                }
              </button>
            </div>
        </div>
        {
          isClick && (
            <div className="ml-4 flex items-center space-x-4 md:hidden">
              {
                navData.map((value)=>(
                  <div key={value.name} className={`${(location.pathname === value.path)&& "border-b-4 border-b-header-500"} text-white px-6 py-3 font-semibold`}>
                    <Link to={value.path} >
                      {value.name}
                    </Link>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </header>
  )
}
