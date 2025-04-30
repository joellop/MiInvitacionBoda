import { Component } from '@angular/core';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { DetailsComponent } from './sections/details/details.component';
import { StoryComponent } from './sections/story/story.component';
import { RsvpComponent } from './sections/rsvp/rsvp.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [WelcomeComponent, DetailsComponent, StoryComponent, RsvpComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invitacion-boda';
}
