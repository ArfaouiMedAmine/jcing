import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgBoardComponent } from './sg-board.component';

describe('SgBoardComponent', () => {
  let component: SgBoardComponent;
  let fixture: ComponentFixture<SgBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
