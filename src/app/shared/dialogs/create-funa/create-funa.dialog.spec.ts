import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFunaDialog } from './create-funa.dialog';

describe('CreateFunaDialog', () => {
  let component: CreateFunaDialog;
  let fixture: ComponentFixture<CreateFunaDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFunaDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFunaDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
