import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlsComponent } from './firstls.component';

describe('FirstlsComponent', () => {
  let component: FirstlsComponent;
  let fixture: ComponentFixture<FirstlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
