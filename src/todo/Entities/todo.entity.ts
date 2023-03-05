export class TodoEntity{
  id: string;
  name: string;
  description: string;
  dateCreation: string;
  status: TodoStatusEnum;
  constructor(
    id:string,
    name:string,
    description:string,
    status: TodoStatusEnum = TodoStatusEnum.waiting,
  ) {
    this.id=id;
    this.name=name;
    this.description=description;
    this.dateCreation= new Date().toLocaleDateString()
  }
}
export enum TodoStatusEnum{
  'actif'= 'en cours',
  'waiting'="En attente",
  'done'= `Finalisé`
}