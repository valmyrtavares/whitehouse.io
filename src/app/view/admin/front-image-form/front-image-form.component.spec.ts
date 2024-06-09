import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontImageFormComponent } from './front-image-form.component';

describe('FrontImageFormComponent', () => {
  let component: FrontImageFormComponent;
  let fixture: ComponentFixture<FrontImageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontImageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
