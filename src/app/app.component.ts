import { Component } from '@angular/core';

@Component({
  selector: 'vit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vitter-Folio';

  alert() {
    alert('this is a test');
  }
}
