import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SuccessComponent', () => {
  let fixture: ComponentFixture<SuccessComponent>;
  let component: SuccessComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        SuccessComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should return email', () => {
    expect(component.userEmail).toBeDefined();
  });

  it('should return name', () => {
    expect(component.userName).toBeDefined();
  });

  it('should call handleInit', () => {
    const spyHandleInit = spyOn(component, 'handleInit');

    component.handleInit();

    expect(spyHandleInit).toHaveBeenCalled();
  });
}); 
