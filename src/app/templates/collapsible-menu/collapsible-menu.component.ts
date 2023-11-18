import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-collapsible-menu',
  templateUrl: './collapsible-menu.component.html',
  styleUrls: ['./collapsible-menu.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('open', style({ height: '*', padding: '10px' })),
      state('closed', style({ height: '0', padding: '0', overflow: 'hidden' })),
      transition('open <=> closed', [
        animate('0.2s ease-in-out')
      ]),
    ]),
  ],
})
export class CollapsibleMenuComponent {
  isCollapsibleActive = false;
  @Input() modo!: string;
  @Input() titulo!: string;
  toggleCollapsible() {
    this.isCollapsibleActive = !this.isCollapsibleActive;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'expandCollapse') {
      // La animación expandCollapse ha terminado
      this.isCollapsibleActive = false;
    }
  }
}
