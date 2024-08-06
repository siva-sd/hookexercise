import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooklifecycleComponent } from './hooklifecycle.component';

describe('HooklifecycleComponent', () => {
  let component: HooklifecycleComponent;
  let fixture: ComponentFixture<HooklifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HooklifecycleComponent]
    });
    fixture = TestBed.createComponent(HooklifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
