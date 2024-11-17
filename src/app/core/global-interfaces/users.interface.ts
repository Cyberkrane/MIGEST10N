export interface IUser  {
    id?: string,
    username: string,
    password: string,
    email?: string,
    token: string,
    roleAdmin?: boolean
}