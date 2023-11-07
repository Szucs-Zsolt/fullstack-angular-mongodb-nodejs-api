import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EredmenyComponent } from './eredmeny.component';

describe('EredmenyComponent', () => {
  let component: EredmenyComponent;
  let fixture: ComponentFixture<EredmenyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EredmenyComponent]
    });
    fixture = TestBed.createComponent(EredmenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
