import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  filmName:string=""
  filmList:any=[]


  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.getFilms().subscribe((data:any)=>{
      this.filmList=data
      console.log(this.filmList);
      
    })
  }
}
