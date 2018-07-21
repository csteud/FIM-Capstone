import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from "@angular/common/http";

import { Hose } from "./hose.model";


@Injectable()
export class HoseService {
    hoseSelected = new EventEmitter<Hose>();
    hosesUpdated = new EventEmitter();
    hoses: Hose[] = [];
    hose: Hose;

    constructor(private httpClientService: HttpClient) {
        this.getHoses();
    }

    setHoses(hoses: Hose[]) {
        this.hoses = hoses;
        this.hosesUpdated.next(this.hoses.slice());
    }

    getHoses() {
        this.requestHoses()
        .subscribe(
            (hoses: Hose[]) => {
                this.setHoses(hoses);
            }
        );
        this.hosesUpdated.next(this.hoses);
        return this.hoses.slice();
    }

    getHose(id: number) {
        return this.httpClientService.get<Hose>('http://localhost:8080/api/hoses/' + id)
            .pipe(
                map(
                    (hose) => {
                        return hose;
                    }
                )
            )
    }

    addHose(hose) {
        this.httpClientService.post('http://localhost:8080/api/hoses', hose)
            .subscribe(
                (response) => {
                    this.getHoses();
                },
                (error) => console.log(error)
            );
    }

    updateHose(id: number, hose: Hose) {
        this.httpClientService.put('http://localhost:8080/api/hoses/' + id, hose)
            .subscribe(
                (response) => {
                    this.getHoses();
                },
                (error) => console.log(error)
            );
    }

    deleteHose(id: number) {
        return this.httpClientService.delete('http://localhost:8080/api/hoses/' + id);
    }

    requestHoses(): Observable<Hose[]> {
        return this.httpClientService.get<Hose[]>('http://localhost:8080/api/hoses')
            .pipe(
                map(
                    (hoses) => {
                        return hoses; 
                    }
                )
            )
    }
}