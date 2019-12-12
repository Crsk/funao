import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunaComponent } from './funa.component';

describe('FunaComponent', () => {
  let component: FunaComponent;
  let fixture: ComponentFixture<FunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
