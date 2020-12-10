import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeContainer } from './welcome.container';

describe('WelcomeComponent', () => {
  let component: WelcomeContainer;
  let fixture: ComponentFixture<WelcomeContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
