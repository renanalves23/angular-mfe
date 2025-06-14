import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessPageComponent } from './success-page.component';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/models/user/user.model';
import { ComponentsModule } from 'src/components/components.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('SuccessPageComponent', () => {
  let fixture: ComponentFixture<SuccessPageComponent>;
  let component: SuccessPageComponent;

  let mockUserSubject: BehaviorSubject<UserModel | null>;

  beforeEach(async () => {
     mockUserSubject = new BehaviorSubject<UserModel | null>(null);

     (window as any).sharedDataService = {
      user$: mockUserSubject.asObservable()
    };

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        AppRoutingModule,
        ComponentsModule,
      ],  
      declarations: [
        SuccessPageComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessPageComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    
    delete (window as any).sharedDataService;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set userName and userEmail on user emission', () => {
    const mockUser: UserModel = { name: 'John Doe', email: 'john@example.com' } as UserModel;

    component.ngOnInit();
    mockUserSubject.next(mockUser);

    expect(component.userName).toBe('John Doe');
    expect(component.userEmail).toBe('john@example.com');
  });  

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = spyOn(component['subscription']!, 'unsubscribe');

    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
