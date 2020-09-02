import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTileComponent } from './release-tile.component';

describe('ReleaseTileComponent', () => {
  let component: ReleaseTileComponent;
  let fixture: ComponentFixture<ReleaseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
