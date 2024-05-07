import { Component } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {


  listTv:any[]=[
    {id:1,title:'Tv1',price:1500,quantity:0,like:0,image:"../../assets/tv.jpg"},
    {id:2,title:'Tv2',price:1000,quantity:0,like:0,image:"../../assets/tv.jpg"},
    {id:3,title:'Tv3',price:2000,quantity:10,like:0,image:"../../assets/tv.jpg"},
  ]

  afterReciveData(t:any){
    this.listTv.find((e)=>e.id==t).like++
  }
}
