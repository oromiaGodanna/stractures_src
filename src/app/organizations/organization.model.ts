export class Organization {
    public name: string;
    public orgId: string;
    public type: string;
    public description: string;

    constructor(name:string, orgId:string, type:string, description:string){
        this.name = name;
        this.orgId = orgId;
        this.type = type;
        this.description = description;
    }
}