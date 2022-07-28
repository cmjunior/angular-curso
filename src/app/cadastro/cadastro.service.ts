import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class CadastroService {
    get url() {
        return `${environment.apiURL}/api/client`;
    }

    constructor(
        private httpClient: HttpClient
    ) {}

    saveClient(client: any) {
        return this.httpClient.post(this.url, client);
    }

}