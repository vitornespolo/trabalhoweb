import { AbstractEntity } from './abstractentity';

export class Veiculo extends AbstractEntity {

    public modelo:string;
    public cor:string;
    public placa:string;
    public valor:number;
}