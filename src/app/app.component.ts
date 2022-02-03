import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outputexample';
  technologies=["sql","c++"]

  addTech(newTech:any){
    this.technologies.push(newTech);
  }
}
