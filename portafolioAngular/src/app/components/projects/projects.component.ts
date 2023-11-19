import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

// En tu componente TypeScript
projects = [
  { 
    id: 1,
    content: 'Burger 1997 API Client',
    webImage: 'assets/img/bqac-web.png',
    mobileImage: 'assets/img/bqac-mobile.png'
  },
  { 
    id: 2,
    content: 'Wanderlust Movies Traveler Community',
    webImage: 'assets/img/mc-web.png',
    mobileImage: 'assets/img/mc-mobile.png'
  },
  { 
    id: 3,
    content: 'Markdown Links',
    webImage: 'assets/img/mdlinks-web.png',
  },
  { 
    id: 4,
    content: 'Arequipa 360 Turistic Social Network',
    webImage: 'assets/img/360aqp-web.png',
    mobileImage: 'assets/img/360aqp-mobile.png'
  },
];


  redirectToProject(projectId: number) {
    const githubRepoUrls = [
      'https://github.com/CAMIANAIS/DEV009-burger-queen-api-client',
      'https://github.com/CAMIANAIS/DEV009-movie-challenge-fw',
      'https://github.com/CAMIANAIS/DEV009-md-links/tree/feature-branch',
      'https://arequipa-360.netlify.app'
    ];

    const repoUrl = githubRepoUrls[projectId - 1];
    
    // Redirige a la página de GitHub del proyecto correspondiente
    window.open(repoUrl, '_blank');
  }
}
