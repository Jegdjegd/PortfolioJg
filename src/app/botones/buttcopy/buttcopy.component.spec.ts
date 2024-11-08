import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtcopyComponent } from './buttcopy.component';

describe('ButtcopyComponent', () => {
  let component: ButtcopyComponent;
  let fixture: ComponentFixture<ButtcopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtcopyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
