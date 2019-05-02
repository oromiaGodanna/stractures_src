export class Department {
  [x: string]: any;
    public id:number;
    public orgId: string;
    public parentId: number;
    public name: string;
    public description: string;

    constructor(id:number, orgId:string, parentId:number, name: string, desc: string) {
        this.id=id;
        this.orgId = orgId;
        this.parentId = parentId;
        this.name = name;
        this.description = desc;
        
    }
}