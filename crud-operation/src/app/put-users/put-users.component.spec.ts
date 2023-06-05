import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutUsersComponent } from './put-users.component';

describe('PutUsersComponent', () => {
  let component: PutUsersComponent;
  let fixture: ComponentFixture<PutUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutUsersComponent]
    });
    fixture = TestBed.createComponent(PutUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
