import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignEditContentComponent } from './campaign-edit-content.component';

describe('CampaignEditContentComponent', () => {
  let component: CampaignEditContentComponent;
  let fixture: ComponentFixture<CampaignEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignEditContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
