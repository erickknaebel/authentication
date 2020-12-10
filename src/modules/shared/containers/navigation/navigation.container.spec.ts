import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationContainer } from './navigation.container';

describe('NavigationContainer', () => {
  let component: NavigationContainer;
  let fixture: ComponentFixture<NavigationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
