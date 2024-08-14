import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeSessionComponent } from './like-session.component';

describe('LikeSessionComponent', () => {
  let component: LikeSessionComponent;
  let fixture: ComponentFixture<LikeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
