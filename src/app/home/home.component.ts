import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  categories:any = [
    {name:"Electronics"}, 
    {name:"Sports"}, 
    {name:"Home"}, 
    {name:"Fashion"}, 
    {name:"Health"},
    {name:"Pets"},
    {name:"Kitchen"},
    {name:"Outside"}, 
    {name:"Hardware"}
  ];
  ngOnInit(): void {

  }

}
