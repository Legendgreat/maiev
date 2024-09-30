import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretListItemComponent } from './secret-list-item.component';

describe('SecretListItemComponent', () => {
  let component: SecretListItemComponent;
  let fixture: ComponentFixture<SecretListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
