export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    operational: boolean;
    orbitType: string;
    

    

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = "";
        this.type = "";
        this.launchDate = "";
        this.orbitType = "";
        this.operational = true;
    };
}
