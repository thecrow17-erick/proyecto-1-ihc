import { create ,StateCreator} from "zustand"
import { devtools , persist} from "zustand/middleware"

interface LocalidadState {
  deparatamento: string
  provincia: string,
  localidad: string
}

interface Actions{
  setDeparatamento: (value: string)=>void
  setProvincia: (value: string)=>void
  setLocalidad: (value: string)=>void
}

const storeApi :StateCreator<LocalidadState & Actions> = (set)=>({
  deparatamento: '',
  provincia: '',
  localidad: '',
  setDeparatamento: (value: string) => set(({deparatamento: value})),
  setProvincia: (value: string) => set(({provincia: value})),
  setLocalidad: (value: string) => set(({localidad: value})),
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

export const useLocalidadStore = create<LocalidadState & Actions>()(
  devtools(
    persist(
      storeApi
      , {
        name: "localidad-storage"
      }
    )
  )
)
