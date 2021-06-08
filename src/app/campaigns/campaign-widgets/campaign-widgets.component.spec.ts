import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWidgetsComponent } from './campaign-widgets.component';

describe('CampaignWidgetsComponent', () => {
  let component: CampaignWidgetsComponent;
  let fixture: ComponentFixture<CampaignWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
