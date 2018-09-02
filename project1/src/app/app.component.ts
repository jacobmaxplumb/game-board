import { Component } from '@angular/core';
import { readFile } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hatala Games';
  
  readFile("C:\Users\lhata\Documents\Jacob\project1\src\app\navbar\navbar.component.html", (err, data) => {
    console.log(data);
  });
}
