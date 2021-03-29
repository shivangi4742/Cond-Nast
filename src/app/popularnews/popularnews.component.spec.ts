import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularnewsComponent } from './popularnews.component';

describe('PopularnewsComponent', () => {
  let component: PopularnewsComponent;
  let fixture: ComponentFixture<PopularnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
