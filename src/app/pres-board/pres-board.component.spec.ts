import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresBoardComponent } from './pres-board.component';

describe('PresBoardComponent', () => {
  let component: PresBoardComponent;
  let fixture: ComponentFixture<PresBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
