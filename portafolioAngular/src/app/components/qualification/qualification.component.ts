import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {

  educationList = [
    {
      institution: 'Laboratoria',
      degree: 'Bootcamp Web Development',
      startDate: '2023',
      endDate: null
    },
    {
      institution: 'Instituto del Sur',
      degree: 'Information Systems Development',
      startDate: '2022',
      endDate: 'Actualidad'
    }
    // Agrega más experiencias educativas según sea necesario
  ];

}
