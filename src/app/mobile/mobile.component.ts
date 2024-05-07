import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {


  listMobile:any[]=[
    {id:1,title:'Moile1',price:1500,quantity:0,like:0,image:"../../assets/tv.jpg"},
    {id:2,title:'Mobile2',price:1000,quantity:0,like:0,image:"../../assets/tv.jpg"},
    {id:3,title:'Mobile3',price:2000,quantity:10,like:0,image:"../../assets/tv.jpg"},
  ]
}
