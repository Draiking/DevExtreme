import {Injectable} from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Service {


    constructor(private http: HttpClient) {}


    getMyData(): Promise<any> {
      return  this.http.get('https://js.devexpress.com/Demos/DevAV/odata/Tasks').toPromise();
    }
}
