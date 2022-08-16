import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHomePageComponent } from './base-home-page.component';

describe('BaseHomePageComponent', () => {
  let component: BaseHomePageComponent;
  let fixture: ComponentFixture<BaseHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
