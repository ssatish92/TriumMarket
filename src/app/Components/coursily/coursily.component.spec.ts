import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursilyComponent } from './coursily.component';

describe('CoursilyComponent', () => {
  let component: CoursilyComponent;
  let fixture: ComponentFixture<CoursilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursilyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
