import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../appServices/get-data.service';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class subjectsComponent implements OnInit {
text1 = '';
text2 = '';
constructor(
    private service: GetDataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  sendData(){
    this.service.data1 = this.text1;
    this.service.data2 = this.text2;
    this.router.navigate(['field']);
  }

}
