import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //this.propertyId =  +( this.route.snapshot.params['Id']);

    this.route.params.subscribe((params =>{
      this.propertyId = +params['Id'];
    })
  )}

  onSelectedNext(){
    this.propertyId +=1;
    console.log(this.propertyId);
    this.router.navigate(['/property-detail',this.propertyId]);
  }
}
