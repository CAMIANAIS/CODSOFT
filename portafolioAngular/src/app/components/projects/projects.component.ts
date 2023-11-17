import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  projects = [
    { id: 1, title: 'Burger 1997 API Client' },
    { id: 2, title: 'Wanderlust Movies Traveler Community'},
    { id: 3, title: 'Markdown Links'},
    { id: 4, title: 'Arequipa 360 Turistic Social Network '},
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
