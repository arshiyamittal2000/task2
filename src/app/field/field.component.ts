import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../appServices/get-data.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class fieldComponent implements OnInit {

  input1 = '';
  input2 = '';
  constructor(private service: GetDataService) { }

  ngOnInit(): void {
    this.input1 = this.service.data1;
    this.input2 = this.service.data2;
  }

}
