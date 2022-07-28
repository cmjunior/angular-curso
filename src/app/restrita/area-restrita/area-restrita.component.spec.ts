import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRestritaComponent } from './area-restrita.component';

describe('AreaRestritaComponent', () => {
  let component: AreaRestritaComponent;
  let fixture: ComponentFixture<AreaRestritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaRestritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaRestritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
