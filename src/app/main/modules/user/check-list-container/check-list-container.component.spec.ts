import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListContainerComponent } from './check-list-container.component';

describe('CheckListContainerComponent', () => {
  let component: CheckListContainerComponent;
  let fixture: ComponentFixture<CheckListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
