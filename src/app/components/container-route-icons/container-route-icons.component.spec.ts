import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRouteIconsComponent } from './container-route-icons.component';

describe('ContainerRouteIconsComponent', () => {
  let component: ContainerRouteIconsComponent;
  let fixture: ComponentFixture<ContainerRouteIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerRouteIconsComponent]
    });
    fixture = TestBed.createComponent(ContainerRouteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
