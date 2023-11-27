import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

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
      title: 'Backend Skills',
      items: [
        { name: 'Java', logo: '/assets/img/java.png' },
        { name: 'C#', logo: '/assets/img/lenguajec.png' },
        { name: 'MySQL Server', logo: '/assets/img/mysql.png' },
      ]
    },
    {
      title: 'Testing Skills',
      items: [
        { name: 'Jest', logo: '/assets/img/jest.png' },
        { name: 'Jasmine', logo: '/assets/img/jasmine.png' },
        { name: 'Karma', logo: '/assets/img/karma.png' },
      ]
    },
    {
      title: 'Other Skills',
      items: [
        { name: 'GitHub', logo: '/assets/img/github.png' },
        { name: 'Miro', logo: '/assets/img/miro.png' },
        { name: 'Figma', logo: '/assets/img/figma.png'},
        { name: 'Canva', logo: '/assets/img/canva.png' },
        { name: 'Trello', logo: '/assets/img/trello.png' }
      ]
    }
  ];
  
}
