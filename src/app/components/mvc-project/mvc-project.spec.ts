import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvcProject } from './mvc-project';

describe('MvcProject', () => {
  let component: MvcProject;
  let fixture: ComponentFixture<MvcProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MvcProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvcProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
