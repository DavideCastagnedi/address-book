import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerComponents } from './contact-manager.component';

describe('ContactManagerComponent', () => {
  let component: ContactManagerComponents;
  let fixture: ComponentFixture<ContactManagerComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerComponents]
    });
    fixture = TestBed.createComponent(ContactManagerComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
