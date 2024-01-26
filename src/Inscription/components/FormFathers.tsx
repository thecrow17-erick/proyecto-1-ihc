import { Link } from 'react-router-dom';
import {useForm,Controller, SubmitHandler} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


import {Select,SelectTrigger,SelectContent,SelectValue,SelectItem, Input , Button,  Alert,
  AlertDescription,
  AlertTitle,} from '@/components'

import {useLocalidadStore,usePersonStore} from '@/Inscription/store'
import { provincia as FindProvincia} from '../helper/provincia';
import {FormPaso1} from '@/Inscription/interface'
export const FormFathers = ({setProgress}:{setProgress(n:number): void}) => {
  //datos de la localidad
  const departamento = useLocalidadStore(state => state.deparatamento);
  const setDepartamento = useLocalidadStore(state => state.setDeparatamento) ;

  const provincia = useLocalidadStore(state => state.provincia);
  const setProvincia = useLocalidadStore(state => state.setProvincia) ;

  const localidad = useLocalidadStore(state => state.localidad);
  const setLocalidad = useLocalidadStore(state => state.setLocalidad) ;

  //datos del tutor
  const nameTutor = usePersonStore(state => state.name);
  const setNameTutor = usePersonStore(state => state.setName);

  const ciTutor = usePersonStore(state => state.ci);
  const setCITutor = usePersonStore(state => state.setCI);

  const celularTutor = usePersonStore(state => state.celular);
  const setCelularTutor = usePersonStore(state => state.setCelular);

  const emailTutor = usePersonStore(state => state.email);
  const setEmailTutor = usePersonStore(state => state.setEmail);


  //validaciones 
  const schema = yup.object({
    departamento: yup.string().required(),
    provincia: yup.string().required(),
    localidad: yup.string().matches(/^[a-zA-Z-" "]+$/, 'Debe contener solo letras').required(),
    nombre: yup.string().matches(/^[a-zA-Z-" "]+$/, 'Debe contener solo letras').required("Ingrese datos."),
    ci: yup.string().matches(/^[0-9]+$/, 'Debe contener solo numeros').required("Ingrese datos.").max(10),
    celular: yup.string().matches(/^[0-9]+$/, 'Debe contener solo numeros').required("Ingrese datos.").max(8),
    email: yup.string().email()
  }).required()
  //formulario
  const {
    handleSubmit,
    control,
    formState:{
      errors
    }
  } = useForm<FormPaso1>({
    defaultValues:{
      departamento,
      provincia,
      localidad,
      nombre: nameTutor,
      ci: ciTutor,
      email: emailTutor,
      celular: celularTutor
    },
    resolver: yupResolver(schema),
  })
  //busca la provincia del departamento
  const departamentoData = FindProvincia(departamento);

  //onsubmit para guardar datos
  const onSubmit:SubmitHandler<FormPaso1> = (data)=>{
    setDepartamento(data.departamento);
    setProvincia(data.provincia);
    setLocalidad(data.localidad?? "");
    setNameTutor(data.nombre);
    setCITutor(data.ci);
    setCelularTutor(data.celular);
    setEmailTutor(data.email?? "")
    setProgress(2);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='md:grid md:grid-rows md:grid-cols-4 gap-4'>
          <div className='px-5'>
            <div className='flex justify-center items-center flex-col h-auto py-10'>
              {/* Departamentos */}
              <h3 className='font-semibold text-lg'>Seleccione un departamento: </h3>
              <Controller
              control={control}
              name='departamento'
              render={({field: {onChange,onBlur,value}})=>(
                <Select onValueChange={(value)=>{
                  onChange(value)
                  setDepartamento(value)}}  value={value} >
                  <SelectTrigger className="w-2/3 bg-naranja-1 text-white rounded-xl font-semibold text-lg md:mb-3 md:w-3/4" onBlur={onBlur}>
                    <SelectValue placeholder="DEPARTAMENTO" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Santa cruz">Santa cruz</SelectItem>
                    <SelectItem value="Cochabamba">Cochabamba</SelectItem>
                    <SelectItem value="La paz">La paz</SelectItem>
                    <SelectItem value="Oruro">Oruro</SelectItem>
                    <SelectItem value="Potosi">Potosi</SelectItem>
                    <SelectItem value="Pando">Pando</SelectItem>
                    <SelectItem value="Chuquisaca">Chuquisaca</SelectItem>
                    <SelectItem value="Beni">Beni</SelectItem>
                    <SelectItem value="Tarija">Tarija</SelectItem>
                  </SelectContent>
                </Select>
              )}
              />

              {/* provincias */}
              <h3 className='font-semibold text-lg'>Seleccione una provincia: </h3>
              <Controller
              control={control}
              name='provincia'
              disabled={departamento === ""}
              render={({field: {onChange,onBlur,disabled,value}})=>(
                <Select onValueChange={onChange} value={value}  disabled={disabled}>
                    <SelectTrigger className="w-2/3 bg-naranja-1 text-white font-semibold rounded-xl text-lg md:mb-3 md:w-3/4" onBlur={onBlur}>
                      <SelectValue placeholder="PROVINCIA" />
                    </SelectTrigger>
                    <SelectContent>
                      {
                        departamentoData && departamentoData.provincias.map((value,i) =>(
                          <SelectItem key={i} value={value}>{value}</SelectItem>
                          ))
                        }
                    </SelectContent>
                </Select>
              )}
              />
              {/* Localidad */}
              <h3 className='font-semibold text-lg'>Localidad: </h3>
              <Controller
                name='localidad'
                control={control}
                render={({field:{onChange,value} })=>(
                  <Input 
                  onChange={onChange}
                  value={value}
                  className='border-naranja-1 md:w-3/4 w-2/3 rounded-xl  text-lg mb-3' placeholder='ej: Villa 1ero de mayo' 
                  type='text'/>
                )}
              />
              {
                errors.localidad && (
                  <Alert className='bg-gray-500 text-white'>
                    <AlertTitle>Error al ingresar datos!</AlertTitle>
                    <AlertDescription>
                      {errors.localidad.message}
                    </AlertDescription>
                  </Alert>
                )
              }

              <Button className='bg-header-500 md:w-3/4 font-bold text-lg rounded-xl py-2' type='submit'
              >
                Continuar
              </Button>
            </div>
              <Link className='text-header-500 text-lg font-semibold underline  underline-offset-1'  to="/"> 
                Volver a la pagina principal.
              </Link>
          </div>
          <div className='col-span-3'>
            <div className='h-full w-full flex justify-center items-center flex-col py-5'>
              <div className='bg-naranja-2 rounded-xl h-full w-3/4 md:p-10 flex justify-center items-center'>
                <div className='md:w-2/4 h-auto md:py-10'>
                  <h2 className='text-center font-bold text-2xl text-gray-400 mb-5'>Formulario</h2>
                  <div className='flex flex-col'>

                    {/* nombres */}
                    <label className='text-gray-400 font-semibold text-md'>Apellidos y nombres de padre,madre o tutor</label>
                    <Controller 
                    name='nombre'
                    control={control}
                    render={({field: {onChange,value}})=>(
                      <Input onChange={onChange} className='  w-full rounded-xl text-lg mb-3' defaultValue={value} placeholder='ej: Choquehuanca Huarachi Dario' type='text'/>
                    )}
                    />
                    {
                      errors.nombre && (
                      <Alert className='bg-gray-500 text-white mb-3'>
                          <AlertTitle>Error al ingresar datos!</AlertTitle>
                          <AlertDescription>
                            {errors.nombre.message}
                          </AlertDescription>
                        </Alert>
                      )
                    }
                    {/* ci */}
                    <label className='text-gray-400 font-semibold text-md'>Cedula de identidad de padre,madre o tutir</label>
                    <Controller 
                    name='ci'
                    control={control}
                    render={({field: {onChange,value}})=>(
                    <Input onChange={onChange} className='  w-full rounded-xl text-lg mb-3' defaultValue={value} placeholder='ej: 130291' type='text'/>
                    )}/>
                    {
                      errors.ci && (
                        <Alert className='bg-gray-500 text-white'>
                          <AlertTitle>Error al ingresar datos!</AlertTitle>
                          <AlertDescription>
                            {errors.ci.message}
                          </AlertDescription>
                        </Alert>
                      )
                    }
                    {/* celular */}
                    <label className='text-gray-400 font-semibold text-md'>Celular</label>
                    <Controller 
                    name='celular'
                    control={control}
                    render={({field: {onChange,value}})=>(
                    <Input onChange={onChange} className=' w-full rounded-xl text-lg mb-3' defaultValue={value} placeholder='ej: 62700012' type='text'/>
                    )} />
                    {
                      errors.celular && (
                        <Alert className='bg-gray-500 text-white'>
                          <AlertTitle>Error al ingresar datos!</AlertTitle>
                          <AlertDescription>
                            {errors.celular.message}
                          </AlertDescription>
                        </Alert>
                      )
                    }
                    {/* email */}
                    <label className='text-gray-400 font-semibold text-md'>Email(Opcional)</label>
                    <Controller 
                    name='email'
                    control={control}
                    render={({field: {onChange,value}})=>(
                    <Input onChange={onChange} className='w-full rounded-xl text-lg mb-3' defaultValue={value} placeholder='ej: 62700012' type='email'/>
                    )}
                    />
                    {
                      errors.email && (
                        <Alert className='bg-gray-500 text-white'>
                          <AlertTitle>Error al ingresar datos!</AlertTitle>
                          <AlertDescription>
                            {errors.email.message}
                          </AlertDescription>
                        </Alert>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </form>
    </>
  )
}
