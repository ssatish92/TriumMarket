import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiexpComponent } from './boutiexp.component';

describe('BoutiexpComponent', () => {
  let component: BoutiexpComponent;
  let fixture: ComponentFixture<BoutiexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiexpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutiexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
