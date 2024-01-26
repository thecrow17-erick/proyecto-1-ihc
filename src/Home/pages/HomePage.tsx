import {CardHomeInscription} from '../components'

export const HomePage = () => {
  return (
    <div className="grid md:grid-cols-2 bg-naranja-2 h-auto xl:w-3/4 rounded-lg py-5">
      <div className="flex items-center justify-center">
        <div className="h-auto w-full p-2">
          <img src="../../../assets/escolar.webp" alt="foto escolar" />
        </div>
      </div>
      <div className="md:row-span-2 p-2">
        <CardHomeInscription/>
      </div>
      <div className="flex justify-center items-center m-2 bg-naranja-1 rounded-md px-5">
        <div className='flex justify-evenly flex-col'>
          <div className='w-auto h-14'>
            <h3 className='font-extrabold text-white text-2xl text-center'>Consulte los resultado el 29/02/2024</h3>
          </div>
          <div className='w-auto h-14 mt-5'>
            <p className='text-white font-medium text-lg'>Los cupos se sortearan el 29/02/2024 a las horas 15:00pm, transmision a nivel nacional.</p>
          </div>
          <div className='flex justify-center w-auto h-14 mt-5'>
            <button
            className="bg-header-500 p-2 rounded-lg md:w-3/4 text-white font-bold text-xl w-48 text-center"
            >
            Resultados
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
