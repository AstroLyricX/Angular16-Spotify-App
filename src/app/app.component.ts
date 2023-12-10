import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotify';



  car: CarModel = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2022,
  }

  listCars: Array< CarModel> = [
    {brand: 'Ford', model: 'Mustang', year: 2022},
    {brand: 'Tesla ', model: 'Tesla ', year: 2020},
    {brand: 'Toyota ', model: 'Corolla ', year: 2021},
  ]

  // name: string = 'Ever'
  // age: number = 23
  // phone: null =null
  // email: undefined = undefined
  // datum: any = () => {}
  // status: boolean = true



}

interface CarModel {
  brand: string;
  model: string;
  year?: number;
}
