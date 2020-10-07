import { AcessoriosPesquisaComponent } from './pages/acessorios/acessorios-pesquisa/acessorios-pesquisa.component';
import { AcessoriosCadastroComponent } from './pages/acessorios/acessorios-cadastro/acessorios-cadastro.component';
import { VeiculoPesquisaComponent } from './pages/veiculo/veiculo-pesquisa/veiculo-pesquisa.component';
import { VeiculoCadastroComponent } from './pages/veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './pages/usuario/usuario-cadastro/usuario-cadastro.component';
import { MenuPrincipalComponent } from './pages/menu/menu-principal/menu-principal.component';
import { AuthService } from './pages/usuario/auth.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'veiculo/cadastro',
    pathMatch:'full'
  },
  {
    path:'veiculo/cadastro',
    component:VeiculoCadastroComponent,
    canActivate: [AuthService]
  },
  {
    path:'veiculo/pesquisa',
    component:VeiculoPesquisaComponent,
    canActivate: [AuthService]
  },
  {
    path:'',
    redirectTo:'acessorios/cadastro',
    pathMatch:'full'
  },
  {
    path:'acessorios/cadastro',
    component:AcessoriosCadastroComponent,
    canActivate: [AuthService]
  },
  {
    path:'acessorios/pesquisa',
    component:AcessoriosPesquisaComponent,
    canActivate: [AuthService]
  }
  ,
  {
    path:'login',
    component:UsuarioCadastroComponent
  },
  {
    path:'menu',
    component:MenuPrincipalComponent,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
