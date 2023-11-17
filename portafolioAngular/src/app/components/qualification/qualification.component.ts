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

  jobList = [
    {
      company: 'MVS REPRESENTACIONES S.R.L',
      position: 'Accountant Assistant',
      startDate: 'October 2020',
      endDate: 'December 2022',

    },
    {
      company: 'BSG INSTITUTE',
      position: 'Financial Assistants',
      startDate: 'August 2019',
      endDate: 'November 2019',

    }
    // Agrega más trabajos según sea necesario
  ];
}
