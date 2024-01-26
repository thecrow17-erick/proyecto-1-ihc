import {provinciasDeBolivia} from '@/data/provincias'


export const provincia = (departamento: string) => {
  return provinciasDeBolivia.filter(({name}) => name === departamento)[0];

}
