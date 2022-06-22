import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAPostComponent } from './start-a-post.component';

describe('StartAPostComponent', () => {
  let component: StartAPostComponent;
  let fixture: ComponentFixture<StartAPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
