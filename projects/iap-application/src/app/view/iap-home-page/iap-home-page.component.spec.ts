import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IapHomePageComponent } from './iap-home-page.component';

describe('IapHomePageComponent', () => {
  let component: IapHomePageComponent;
  let fixture: ComponentFixture<IapHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IapHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IapHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
