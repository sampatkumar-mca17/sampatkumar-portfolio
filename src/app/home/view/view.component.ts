import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed from "typed.js"

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }
  scrollId = 'hero'
  ngOnInit(): void {
    const options = {
      strings: ['Frontend Developer.', 'Angular Developer.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
    this.scrollTo('hero')
  }

  scrollTo(elementId:string){
    this.scrollId = elementId
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
