import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  listCustomers: Array<Customer>;
  ngOnInit() {
    this.customerService.getListCustomers().subscribe(
      data => {
        console.log(data);
        this.listCustomers = data;
      }
    );
  }

}
