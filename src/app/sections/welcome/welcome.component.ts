import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  ngOnInit() {
    AOS.init();
  }
}
