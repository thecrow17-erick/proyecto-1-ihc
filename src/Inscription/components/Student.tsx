import { RiDeleteBin6Fill } from "react-icons/ri";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Button, Input } from "@/components";
import { useStudentStore } from '../store/students.store';

interface StudentFormProps {
  index: number;
}

export const StudentForm: React.FC<StudentFormProps> = ({ index }) => {
  const removeStudent = useStudentStore(state => state.removeStudent)
  const students = useStudentStore(state => state.students)

  const setPaterno = useStudentStore(state => state.setApellidoPaterno)

  const setMaterno = useStudentStore(state => state.setApellidoMaterno)
  const setNombres = useStudentStore(state => state.setNombres)
  const setCi = useStudentStore(state => state.setCi)
  const setNivel = useStudentStore(state => state.setNivel)
  return (
    <div className="h-auto md:flex md:flex-row md:relative bg-naranja-1 md:bg-transparent rounded-lg m-2">
      <div className="w-auto p-2" >
        <label className='text-white md:text-gray-400 font-semibold text-md'>Apellido paterno</label>
          <Input onChange={(value)=>setPaterno(index,value.target.value)} value={students[index].paterno} className='w-full rounded-xl text-lg mb-3'  placeholder='ej: Choquehuanca' type='text'/>
      </div>
      <div className="w-auto p-2">
        <label className=' text-white md:text-gray-400 font-semibold text-md'>Apellido Materno</label>
        <Input 
        onChange={(value)=>setMaterno(index,value.target.value)}
        value={students[index].materno}
        className='w-full rounded-xl text-lg mb-3'  placeholder='ej: Huarachi' type='text'/>
      </div>
      <div className="w-auto p-2">
        <label className=' text-white md:text-gray-400 font-semibold text-md'>Nombres</label>
          <Input onChange={(value)=>setNombres(index,value.target.value)}  value={students[index].nombres}className='w-full rounded-xl text-lg mb-3'  placeholder='ej: Dario' type='text'/>
      </div>
      <div className="w-auto p-2">
        <label className='text-white md:text-gray-400 font-semibold text-md'>C.I</label>
        <Input onChange={(value)=>setCi(index,value.target.value)} value={students[index].ci} className='w-full rounded-xl text-lg mb-3'  placeholder='ej: 3425453' type='text'/>
      </div>
      <div className="w-auto p-2 flex flex-col justify-center">
        <label className='text-white md:text-gray-400 font-semibold text-md'>Nivel</label>
        <Select onValueChange={(value)=>setNivel(index,value)} value={students[index].nivel}>
          <SelectTrigger className="w-auto border-black border-solid md:relative bg-naranja-3 md:bg-naranja-1 md:text-white rounded-xl font-semibold text-lg md:mb-3 md:w-full p-2">
            <SelectValue placeholder="NIVEL" />
          </SelectTrigger>
          <SelectContent className="bg-naranja-1 border-black border-solid text-white text-lg md:absolute rounded-sm">
            <SelectItem className="bg-naranja-1 rounded-t-md p-3" value="Primaria">Primaria</SelectItem>
            <SelectItem  className="bg-naranja-1 p-3 rounded-b-md " value="Secundaria">Secundaria</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='w-auto md:w-23 p-2 justify-center flex items-center h-auto'>
        <Button 
        className='text-white font-medium bg-red-700 rounded-md '
        onClick={()=>removeStudent(index)}
        type="button">
          <RiDeleteBin6Fill/>
        </Button>
      </div>
      
    </div>
  );
};