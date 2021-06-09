import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContentCreateComponent } from './campaign-content-create.component';

describe('CampaignContentCreateComponent', () => {
  let component: CampaignContentCreateComponent;
  let fixture: ComponentFixture<CampaignContentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignContentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignContentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
