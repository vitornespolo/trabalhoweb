import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosPesquisaComponent } from './acessorios-pesquisa.component';

describe('AcessoriosPesquisaComponent', () => {
  let component: AcessoriosPesquisaComponent;
  let fixture: ComponentFixture<AcessoriosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoriosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoriosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
