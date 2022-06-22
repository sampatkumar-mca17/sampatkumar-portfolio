import { Component, OnInit } from '@angular/core';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'start-a-post',
  templateUrl: './start-a-post.component.html',
  styleUrls: ['./start-a-post.component.scss']
})
export class StartAPostComponent implements OnInit {
  faPhoto = faPhotoFilm
  constructor() { }

  ngOnInit(): void {
  }

}
