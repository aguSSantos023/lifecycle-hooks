import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutP } from './about-p';

describe('AboutP', () => {
  let component: AboutP;
  let fixture: ComponentFixture<AboutP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
