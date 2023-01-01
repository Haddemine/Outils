export interface ILoginResp {
  nombreshops:number,
  lastseen:string,
  id:number,
  nni:string,
  nom:string,
  prenom:string,
  phone:string,
  role:string,
  access: string,
  refresh_token: string,
  store?: IStore
}

export interface IStore {
  telephone: number,
  sexe: string
}


