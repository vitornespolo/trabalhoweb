import { AcessoriosPesquisaComponent } from './pages/acessorios/acessorios-pesquisa/acessorios-pesquisa.component';
import { AcessoriosCadastroComponent } from './pages/acessorios/acessorios-cadastro/acessorios-cadastro.component';
import { VeiculoPesquisaComponent } from './pages/veiculo/veiculo-pesquisa/veiculo-pesquisa.component';
import { VeiculoCadastroComponent } from './pages/veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'veiculo/cadastro',
    pathMatch:'full'
  },
  {
    path:'veiculo/cadastro',
    component:VeiculoCadastroComponent
  },
  {
    path:'veiculo/pesquisa',
    component:VeiculoPesquisaComponent
  },
  {
    path:'',
    redirectTo:'acessorios/cadastro',
    pathMatch:'full'
  },
  {
    path:'acessorios/cadastro',
    component:AcessoriosCadastroComponent
  },
  {
    path:'acessorios/pesquisa',
    component:AcessoriosPesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
