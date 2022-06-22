import { Component, OnInit } from '@angular/core';
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faBell, faHome, faMessage, faPeopleGroup, faSearch, faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faLinkedIn = faLinkedin
  faSearch = faSearch
  faHome = faHome
  faNetwork = faPeopleGroup
  faJob = faSuitcase
  faMessaging = faMessage
  faBell = faBell
  isMenuCollapsed = false

  action = 'home'
  constructor() { }

  ngOnInit(): void {
  }

}
