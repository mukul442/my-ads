import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherHeaderComponent } from './publisher-header.component';

describe('PublisherHeaderComponent', () => {
  let component: PublisherHeaderComponent;
  let fixture: ComponentFixture<PublisherHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
