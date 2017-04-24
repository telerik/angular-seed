import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-kendo',
  templateUrl: 'kendo.component.html'
})
export class KendoComponent {
  title = 'Hello World!';

  onButtonClick() {
    this.title = 'Hello from Kendo UI!';
  }
}
