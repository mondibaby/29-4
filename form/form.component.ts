import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ FormGroup,FormControl,Validators } from '@angular/forms'

import { DataService } from '../data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  getData: any;
  getarray: any=[]
  //[x: string]: any;
    formData: any = {};

//var_low:string="angular";
// var_cur:number=100;
// var_per:number=10;
// var_des:number=188.99;
// datestring=new Date("2022-08-17");
// var_sli:string="Amaravathi"
// m:any=["","",""]
  constructor(private API:DataService) {
    this.getdata()
    console.log("constructor");
  }
   getData1() {
     throw new Error('Method not implemented.');
   }

  ngOnInit(): void {
    console.log("ngoninit")
  }

   register(): void {
    console.log(this.formData);
   }
  babyform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });
  get f(){
    return this.babyform.controls;
  }

  submit(){
      this.API.postdata(this.babyform.value).subscribe((res: any)=>{
        console.log(res);
        var x = [];
        x.push(res)
        if(x[0].status == 200){
        alert('succesfully submitted')
        this.babyform.reset()
       this.getdata()
        }
      })
  }
  getdata(){
  this.API.getformdata().subscribe((res: any)=>{
    console.log(res);
    var x = [];
    x.push(res)
    this.getarray = x[0].data;
    console.log(this.getarray);

    })

}

deletedata(id : any){
  this.API.deletedataapi(id).subscribe((res: any)=>{
    console.log(res);
    var x = [];
    x.push(res)
if(x[0].status == 200){
  alert("successfully deleted")
  this.getdata()
}

    })

}
}
