import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiranjeRegComponent } from './testiranje-reg.component';

describe('TestiranjeRegComponent', () => {
  let component: TestiranjeRegComponent;
  let fixture: ComponentFixture<TestiranjeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestiranjeRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiranjeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
