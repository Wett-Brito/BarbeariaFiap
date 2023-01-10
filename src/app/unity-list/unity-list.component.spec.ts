import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityListComponent } from './unity-list.component';

describe('UnityListComponent', () => {
  let component: UnityListComponent;
  let fixture: ComponentFixture<UnityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
