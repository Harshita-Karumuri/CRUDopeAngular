import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Create2Component } from './create2.component';

describe('Create2Component', () => {
  let component: Create2Component;
  let fixture: ComponentFixture<Create2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Create2Component]
    });
    fixture = TestBed.createComponent(Create2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
