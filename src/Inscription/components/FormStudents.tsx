import { Link} from 'react-router-dom';


import {StudentForm} from '@/Inscription/components'
import {Alert, AlertDescription, AlertTitle, Button } from '@/components';
import { useStudentStore } from '../store/students.store';
import { FormEvent } from 'react';

export const FormStudents = ({setProgress}:{setProgress(n:number): void}) => {
  const students = useStudentStore(state => state.students)
  const newStudent = useStudentStore(state => state.NewSudent)
  
  const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(students.length === 0 ) return;
    setProgress(3);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="bg-naranja-2 w-3/4 h-full md:p-10 flex-col flex justify-center items-center rounded-xl">
          {
            students.length === 0 && (
              <Alert className='bg-gray-500 text-white'>
                    <AlertTitle>Error al ingresar datos!</AlertTitle>
                    <AlertDescription>
                      Ingrese por lo menos 1 estudiante!
                    </AlertDescription>
                  </Alert>
            )
          }
          <h3 className="text-center font-bold text-2xl text-gray-400 mb-5">Inscripcion de estudiantes</h3>
          <div className="h-full w-full md:px-5 p-2"  >
            <form onSubmit={(e)=> onSubmit(e)}>
              {
                students.map((_,i)=>(
                  <StudentForm key={i} index={i} />
                ))
              }
            <div className='w-full md:flex-row md:flex mt-5'>
              <Button 
              onClick={()=>newStudent()}
              type='button' 
              className='md:mx-2 w-full md:w-2/3  bg-naranja-3'>
                Agregar otro estudiante +
              </Button>

              <Button 
              type='submit'
              className='w-full md:w-1/4  bg-header-500'>
                Continuar
              </Button>
            </div>
            </form>
              <p className='text-header-500 md:px-2 text-lg font-semibold underline  underline-offset-1 cursor-pointer' 
              onClick={()=>setProgress(1)}> 
                Volver atras.
              </p>
              <Link className='md:px-2 text-header-500 text-lg font-semibold underline  underline-offset-1'  to="/"> 
                Volver a la pagina principal.
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
