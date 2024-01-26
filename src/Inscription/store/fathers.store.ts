import { create ,StateCreator} from "zustand"
import {devtools , persist} from "zustand/middleware"
interface PersonState {
  name: string
  ci: string,
  celular: string
  email: string
}

interface Actions{
  setName: (value: string)=>void
  setCI: (value: string)=>void
  setCelular: (value: string)=>void
  setEmail: (value: string)=>void
}

const storeApi :StateCreator<PersonState & Actions> = (set)=>({
  name: '',
  ci: '',
  celular: '',
  email: '',
  setName: (value: string) => set(({name: value})),
  setCI: (value: string) => set(({ci: value})),
  setCelular: (value: string) => set(({celular: value})),
  setEmail:(value: string) => set( ({email: value})),
})

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

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: 'person-storage',
        //storage: createJSONStorage(()=>sesionStorage)
      }
    )
  )
)
