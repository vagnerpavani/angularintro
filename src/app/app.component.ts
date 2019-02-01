import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Paradise';
  minha_var = 'vrauu';

  ngOnInit(){
  console.log('essa é minha variavel: ' + this.minha_var);
  }
}

