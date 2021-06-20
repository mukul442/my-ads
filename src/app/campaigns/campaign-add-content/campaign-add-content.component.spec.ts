import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAddContentComponent } from './campaign-add-content.component';

describe('CampaignAddContentComponent', () => {
  let component: CampaignAddContentComponent;
  let fixture: ComponentFixture<CampaignAddContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignAddContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
