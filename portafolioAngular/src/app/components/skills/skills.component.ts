import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoHeight: false,
    autoWidth: false,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      760: {
        items: 1,
      },
    },
  
  };

  skills = [
    {
      title: 'Frontend Skills',
      items: [
        { name: 'Javascript', logo: '/assets/img/javascript.png' },
        { name: 'Angular', logo: '/assets/img/angular.png' },
        { name: 'React', logo: '/assets/img/react.png' },
      ]
    },
    {
      title: 'Habilidades Backend',
      items: [
        { name: 'Node.js', logo: '/assets/img/node.png' },
        { name: 'MySQL Server', logo: '/assets/img/javascript.png' },
        { name: 'GitHub API', logo: '/assets/img/javascript.png' },
        { name: 'NPM', logo: '/assets/img/javascript.png' },
        { name: 'Jest', logo: '/assets/img/javascript.png' }
      ]
    },
    {
      title: 'Otras Habilidades',
      items: [
        { name: 'Microsoft Office', logo: '/assets/img/javascript.png' },
        { name: 'Figma, Miro, Canva', logo: '/assets/img/javascript.png' },
        { name: 'Trello, Notion', logo: '/assets/img/javascript.png' }
      ]
    }
  ];
}
