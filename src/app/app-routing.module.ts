import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { AcessoriosPesquisaComponent } from './pages/acessorios/acessorios-pesquisa/acessorios-pesquisa.component';
import { AcessoriosCadastroComponent } from './pages/acessorios/acessorios-cadastro/acessorios-cadastro.component';
import { VeiculoPesquisaComponent } from './pages/veiculo/veiculo-pesquisa/veiculo-pesquisa.component';
import { VeiculoCadastroComponent } from './pages/veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo:'usuario/cadastro',
    pathMatch:'full'
  },
  {
    path:'usuario/cadastro',
    component:UsuarioCadastroComponent
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
