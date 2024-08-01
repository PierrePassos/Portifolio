import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'mouse-trail-app';

  @HostListener('document:mousemove', ['$event'])

  onMouseMove(event: MouseEvent) {
    // this.createTrailElement(event.clientX, event.clientY);
  }

  // createTrailElement(x: number, y: number) {
  //   const height = document.documentElement.scrollHeight;
  //   const widht = document.documentElement.scrollWidth;
  //   if (y + 25 == height || y + 25 > height || x + 25 == widht || x + 25 > widht) return;
  //   const trailElement = document.createElement('div');
  //   trailElement.className = 'trail';
  //   trailElement.style.left = `${x + 10}px`;
  //   trailElement.style.top = `${y + 15}px`;

  //   document.body.appendChild(trailElement);

  //   setTimeout(() => {
  //     trailElement.remove();
  //   }, 400);
  // }
}
