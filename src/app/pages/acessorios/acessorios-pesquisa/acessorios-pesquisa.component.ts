import { Acessorio } from './../../../models/acessorios';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessorios-pesquisa',
  templateUrl: './acessorios-pesquisa.component.html',
  styleUrls: ['./acessorios-pesquisa.component.scss']
})
export class AcessoriosPesquisaComponent implements OnInit {

  public acessorios:Acessorio[] = [];
  public dataSource:MatTableDataSource<Acessorio> = new MatTableDataSource(this.acessorios);
  public displayedColumns:string[] = ['nome','valor','cor','detalhes', 'acoes'] ;

  constructor(private router:Router) { }

  ngOnInit(): void {
    let jsonUsers = localStorage.getItem('acessorios');
    if (jsonUsers != null){
      this.acessorios = JSON.parse(jsonUsers);
    }
    this.dataSource = new MatTableDataSource(this.acessorios);
  }
  public remover(acessorio){
    console.log('Removendo acessorio', acessorio);
    let index = this.acessorios.indexOf(acessorio);
    this.acessorios.splice(index, 1);
    localStorage.setItem('acessorios', JSON.stringify(this.acessorios));
    this.dataSource = new MatTableDataSource(this.acessorios);
  }
  public alterar(acessorio){
    console.log('Alterando acessorio', acessorio);
    this.router.navigate(['/acessorios/cadastro', acessorio]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
