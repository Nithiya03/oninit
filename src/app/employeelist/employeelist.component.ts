import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  user :any;
  @Input('name') userName:string ='temp';
  constructor() { }
  ngOnInit(): void {
    this.user ={
      name : this.userName
    }
  }

}
