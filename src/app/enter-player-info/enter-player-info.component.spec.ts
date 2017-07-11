import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPlayerInfoComponent } from './enter-player-info.component';

describe('EnterPlayerInfoComponent', () => {
  let component: EnterPlayerInfoComponent;
  let fixture: ComponentFixture<EnterPlayerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPlayerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
