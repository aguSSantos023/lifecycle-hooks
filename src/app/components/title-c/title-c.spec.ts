import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleC } from './title-c';

describe('TitleC', () => {
  let component: TitleC;
  let fixture: ComponentFixture<TitleC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
