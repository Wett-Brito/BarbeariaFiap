import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-unity-list',
  templateUrl: './unity-list.component.html',
  styleUrls: ['./unity-list.component.css']
})
export class UnityListComponent {

    public unities: any[] | undefined;

    constructor(private http: HttpClient) {}
    title = 'api-angular';
  
    ngOnInit() {
      this.http
        .get<any>('http://localhost:8070/unities', {
        })
        .subscribe(data => {
          this.unities = data
        });
    }
}
