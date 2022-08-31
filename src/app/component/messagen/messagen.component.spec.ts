import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagenComponent } from './messagen.component';

describe('MessagenComponent', () => {
  let component: MessagenComponent;
  let fixture: ComponentFixture<MessagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
