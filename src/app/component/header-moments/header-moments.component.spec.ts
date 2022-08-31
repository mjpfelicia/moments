import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMomentsComponent } from './header-moments.component';

describe('HeaderMomentsComponent', () => {
  let component: HeaderMomentsComponent;
  let fixture: ComponentFixture<HeaderMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
