export interface UserLogged {
    _id: string;
    token: string;
    name: string;
    document: number;
    email: string;
    zip: string;
    number: string;
    complement: string;
    __v: number;
    admin?: boolean;
}