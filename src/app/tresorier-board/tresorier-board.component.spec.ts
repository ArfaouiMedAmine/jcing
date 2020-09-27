import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorierBoardComponent } from './tresorier-board.component';

describe('TresorierBoardComponent', () => {
  let component: TresorierBoardComponent;
  let fixture: ComponentFixture<TresorierBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresorierBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorierBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
