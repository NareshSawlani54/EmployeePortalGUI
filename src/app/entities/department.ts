export class Department {
    private id:number;
    private name: string;
        
    get Id(): number {
        return this.id;
    }    
    set Id(id: number) {
        this.id = id;
    }

    get DepartmentName(): string {
        return this.name;
    }    
    set DepartmentName(departmentName: string) {
        this.name = departmentName;
    }
}