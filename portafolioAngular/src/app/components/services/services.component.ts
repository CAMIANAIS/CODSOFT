import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FrontendComponent } from './frontend/frontend.component';
import { OrganizerComponent } from './organizer/organizer.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private dialog: MatDialog) {}

  openModal(title: string): void {
    if (title === 'Frontend Developer') {
      this.dialog.open(FrontendComponent, { data: { title } });
    } else if (title === 'Campus Director') {
      this.dialog.open(OrganizerComponent, { data: { title } });
    }
  }
}

