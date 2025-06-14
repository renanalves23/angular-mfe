import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/components/components.module';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user/user.service';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegistrationComponent>;
  let component: RegistrationComponent;

  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        ComponentsModule,
      ],
      declarations: [
        RegistrationComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    userService = TestBed.inject(UserService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleUserForm', () => {
    const spyHandleUserForm = spyOn(component, 'handleUserForm');

    component.handleUserForm({ name: 'John Doe', email: 'john.doe@example.com' });

    expect(spyHandleUserForm).toHaveBeenCalled();
  }); 

  it('should call userService.createUser', () => {
    const spyCreateUser = spyOn(userService, 'createUser').and.returnValue(of({ name: 'John Doe', email: 'john.doe@example.com' }));
    const spyHandleDispatch = spyOn(component, 'handleDispatch');
    const spyNavigate = spyOn(router, 'navigate');

    component.handleUserForm({ name: 'John Doe', email: 'john.doe@example.com' });

    expect(spyCreateUser).toHaveBeenCalled();
    expect(spyHandleDispatch).toHaveBeenCalled();
    expect(spyNavigate).toHaveBeenCalledWith(['/sucesso']);
  });
}); 
