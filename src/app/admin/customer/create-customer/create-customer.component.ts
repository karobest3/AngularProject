import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formCreateCustomer){
    console.log(formCreateCustomer.value);
  }

}
