import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HoseType } from "./hose-type.model";
import { map } from 'rxjs/operators'
import { EventEmitter } from "@angular/core";

@Injectable()
export class HoseTypeService {
    hoseTypes: HoseType;
    hoseTypesUpdated = new EventEmitter();

    constructor(private httpClientService: HttpClient){}

    getHoseTypes() {
        return this.httpClientService.get<HoseType[]>('http://localhost:8080/api/types');
    }

    addHoseType(hoseType){
        return this.httpClientService.post('http://localhost:8080/api/types', hoseType);
    }

    removeHoseType(id: number) {
        return this.httpClientService.delete('http://localhost:8080/api/types/' + id)
    }

    updateHoseType(id: number, hoseType: HoseType) {
        return this.httpClientService.put('http://localhost:8080/api/types/' + id, hoseType)
    }
}