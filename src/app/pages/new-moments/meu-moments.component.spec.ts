import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuMomentsComponent } from './meu-moments.component';

describe('MeuMomentsComponent', () => {
  let component: MeuMomentsComponent;
  let fixture: ComponentFixture<MeuMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
