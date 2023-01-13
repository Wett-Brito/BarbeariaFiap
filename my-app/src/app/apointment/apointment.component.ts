import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent {

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {}
  title = 'api-angular';

  disableSelect = new FormControl(false);

  selectedProduct: number | undefined;
  selectedUnity: number | undefined;
  selectedDate: Date | null = new Date;
  selectedHour: number | undefined;

  public unities: any[] | undefined;
  public products: any[] | undefined;

  checkoutForm = this.formBuilder.group({
    unidade: '',
    servico: '',
    data: '',
    hora: ''
  });

  onSubmit(): void {
    const body = { "idProduct": this.selectedProduct, "idUnity": this.selectedUnity, "data": this.selectedDate, "horario": this.selectedHour };
    console.log(body)
    this.http
      .post<any>('/appointments', body)
      .subscribe(data => {});
  }

  ngOnInit() {
    this.http
      .get<any>('/unities', {
      })
      .subscribe(data => {
        this.unities = data
      });

      this.http
			.get<any>('/services', {
			})
			.subscribe(data => {
        this.products = data
			});
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate =  event.value;
  }


}


