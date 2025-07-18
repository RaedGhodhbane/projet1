import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2Component } from './b-2.component';

describe('B2Component', () => {
  let component: B2Component;
  let fixture: ComponentFixture<B2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [B2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(B2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
