import {useNavigate} from 'react-router-dom'
import {FaBook} from 'react-icons/fa'



export const NavInscripcion = () => {
  const navigate = useNavigate();

  const onClickInscripcion = ()=>{
    navigate('/inscription');
  }

  return (
    <div className="bg-celeste-300 flex items-center md:justify-between md:flex-row flex-col p-3">
      <div className='flex items-center justify-center'>
        <FaBook/>
        <h3 className='font-bold'>Llena el formulario para inscribir a tus hijos!</h3>
      </div>
      <button
      className="bg-header-500 p-2 rounded-lg text-white font-bold md:w-auto w-48 text-center"
      onClick={()=>onClickInscripcion()}
      >
        Inscripciones 2024
      </button>
    </div>
  )
}
