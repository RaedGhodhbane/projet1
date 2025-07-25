import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B3Component } from './b-3.component';

describe('B3Component', () => {
  let component: B3Component;
  let fixture: ComponentFixture<B3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
