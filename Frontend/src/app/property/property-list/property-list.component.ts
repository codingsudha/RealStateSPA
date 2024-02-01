
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.Interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  
  SellRent = 1;
  properties: Array<IProperty>=[];

  constructor(private route: ActivatedRoute,private housingService:HousingService){

  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      console.log(this.route.snapshot.url.toString())
      this.SellRent = 2 // means we are on rent-property url else on the base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(data =>{
      this.properties = data;
      console.log(data);
    },
    error =>{
      console.log("Http Error");
      console.log(error);
    })
      // getAllProperties.subscribe(data => {
      //   this.properties = data;
      //   console.log(data);
      // });
  }
}
