import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzavazasComponent } from './szavazas.component';

describe('SzavazasComponent', () => {
  let component: SzavazasComponent;
  let fixture: ComponentFixture<SzavazasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzavazasComponent]
    });
    fixture = TestBed.createComponent(SzavazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
