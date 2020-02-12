import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinhChonComponent } from './binh-chon.component';

describe('BinhChonComponent', () => {
  let component: BinhChonComponent;
  let fixture: ComponentFixture<BinhChonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinhChonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinhChonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
