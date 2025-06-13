import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserFormComponent', () => {
  let fixture: ComponentFixture<UserFormComponent>;
  let component: UserFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        UserFormComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit', () => {
    const spySubmit = spyOn(component, 'submit');

    component.submit();

    expect(spySubmit).toHaveBeenCalled();
  });

  it('should return email', () => {
    expect(component.email).toBeDefined();
  });

  it('should return name', () => {
    expect(component.name).toBeDefined();
  });
}); 
