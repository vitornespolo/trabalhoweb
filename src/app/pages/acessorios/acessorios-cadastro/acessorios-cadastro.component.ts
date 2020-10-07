import { Acessorio } from './../../../models/acessorios';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acessorios-cadastro',
  templateUrl: './acessorios-cadastro.component.html',
  styleUrls: ['./acessorios-cadastro.component.scss']
})
export class AcessoriosCadastroComponent implements OnInit {

  public acessorio:Acessorio = new Acessorio();
  public form:FormGroup = new FormGroup({
    nome:new FormControl(''),
    valor: new FormControl(),
    cor:new FormControl(),
    detalhes: new FormControl()  
  })

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      console.log(params);
      this.acessorio = params as Acessorio;
      this.form.patchValue(this.acessorio);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.acessorio = this.form.value;
    console.log('Acessorio', this.acessorio);
    let jsonUsers = localStorage.getItem('acessorios');
    let acessorios:Acessorio[] = []
    if (jsonUsers != null){
      acessorios = JSON.parse(jsonUsers);
    }
    acessorios.push(this.acessorio); 
    localStorage.setItem('acessorios', JSON.stringify(acessorios));
    console.table(acessorios);
    alert('Salvo com sucesso')
    this.form.reset();
  }
}
