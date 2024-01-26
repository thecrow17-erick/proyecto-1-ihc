import { create ,StateCreator} from "zustand"
import {devtools , persist} from "zustand/middleware"

interface Student{
  paterno : string
  materno: string
  nombres: string
  ci: string
  nivel : string
}
interface StudentState {
  students: Array<Student>
  total: number
}

interface Actions{
  removeStudent: (index: number)=>void
  setApellidoPaterno: (index: number, value: string)=>void
  setApellidoMaterno:(index: number, value: string)=>void
  setNombres: (index: number, value: string)=>void
  setNivel: (index: number, value: string)=>void
  setCi: (index: number, value: string)=>void
  NewSudent: ()=>void
}

const storeApi :StateCreator<StudentState & Actions> = (set)=>({
  students: [{paterno: "",materno:"",ci:"",nivel:"",nombres:""}],
  total: 1,
  removeStudent: (index: number) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents.splice(index, 1);
      return { students: updatedStudents };
    }),
  setApellidoPaterno: (index: number, value: string) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents[index].paterno = value;
      return { students: updatedStudents };
    }),
    setApellidoMaterno: (index: number, value: string) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents[index].materno = value;
      return { students: updatedStudents };
  }),
  setCi: (index: number, value: string) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents[index].ci = value;
      return { students: updatedStudents };
  }),
  setNombres: (index: number, value: string) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents[index].nombres = value;
      return { students: updatedStudents };
  }),
  setNivel: (index: number, value: string) =>
    set((state) => {
      const updatedStudents = [...state.students];
      updatedStudents[index].nivel = value;
      return { students: updatedStudents };
    }),
  NewSudent: ()=>
    set((state)=> ({students: [...state.students,{paterno:"",ci:"",materno:"",nombres:"",nivel:""}]}))
  });
  

// const sesionStorage: StateStorage= {
//   getItem: function (name: string): string | Promise<string | null> | null {
//     console.log('getItem', name);
    
//     return null;
//   },
//   setItem: function (name: string, value: string): void | Promise<void> {
//     console.log('setItem', {name,value});
//   },
//   removeItem: function (name: string): void | Promise<void> {
//     console.log('removeItem', name);
//   }
// }

export const useStudentStore = create<StudentState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: 'students-storage',
        //storage: createJSONStorage(()=>sesionStorage)
      }
    )
  )
)
