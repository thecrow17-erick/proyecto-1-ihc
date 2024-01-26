import {imageneLogos} from '../../data'

export const CardHomeInscription = () => {

  const RequisitosData = [
    {
      img: imageneLogos.nacimiento,
      texto: 'Certificado de nacimiento'
    },
    {
      img: imageneLogos.carnet,
      texto: 'Cedula de identidad'
    },
    {
      img: imageneLogos.vacuna,
      texto: 'Carnet de vacunacion covid-19'
    }
  ]

  return (
    <div className="bg-naranja-1 h-full rounded-md text-2xl p-5">
      <div className="p-1">
        <h2 className="text-white font-bold text-5xl">Inscribe a tus hijos al colegio en gestion 2024!</h2>
      </div>
      <div className="p-1 mt-5">
        <p className="text-white font-semibold text-3xl">
        No pierdas la oportunidad de inscribir a tus hijos hoy. Estamos realizando un sorteo de 10 cupos para primaria y secundaria en cada una de las unidades educativas de Bolivia.
        </p>
      </div>
      <div className="p-1 mt-10">
        <p className="text-white font-extrabold">
          Requisitos:
        </p>
        <div className="flex justify-around items-center h-auto w-full p-5">
          {
            RequisitosData.map((value,i)=>(
              <div key={i} className="h-auto w-32 flex flex-col items-center justify-center">
                <img src={value.img} alt={value.texto} />
                <p className=' text-center text-xl'>{value.texto}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
