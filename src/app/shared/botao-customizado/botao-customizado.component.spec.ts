import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCustomizadoComponent } from './botao-customizado.component';

describe('BotaoCustomizadoComponent', () => {
  let component: BotaoCustomizadoComponent;
  let fixture: ComponentFixture<BotaoCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
