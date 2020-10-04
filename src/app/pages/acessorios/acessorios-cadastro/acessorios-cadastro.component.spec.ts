import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosCadastroComponent } from './acessorios-cadastro.component';

describe('AcessoriosCadastroComponent', () => {
  let component: AcessoriosCadastroComponent;
  let fixture: ComponentFixture<AcessoriosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
