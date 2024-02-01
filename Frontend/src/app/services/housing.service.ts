import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs'
import { IProperty } from '../property/IProperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent?: number):Observable<IProperty[]> {
    return this.http.get('data/property.json').pipe(
      map(data  => {
        const propertiesArray: Array<IProperty> = [];
        for (var id in data) {
          if (data.hasOwnProperty(id) && (data as any)[id].SellRent === SellRent) {
            console.warn('id', id)
            console.log('Reached Here.')
            //console.warn((data as IProperty)[id])
            console.warn(typeof(data))
            propertiesArray.push((data as any)[id]);
          }
        }
        return propertiesArray;
      }
      )
    );
  }
}
