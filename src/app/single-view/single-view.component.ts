import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  area:any=""
  singleFilm:any={}
    constructor(private service:DataService,private rout:ActivatedRoute){
  
    }
    ngOnInit(): void {
  
      this.rout.params.subscribe((data:any)=>{
        this.area=data.area
        console.log(this.area);
        this.service.getFilms().subscribe((response:any)=>{
        this.singleFilm=  response.find((i:any)=>i.area==this.area)
        console.log(this.singleFilm);
        
        })
        
      })
  
    }
}
