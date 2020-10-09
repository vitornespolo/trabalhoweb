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

  public acessorio: Acessorio = new Acessorio();
  public acessorios: Acessorio[] = [];
  public index: number = -1;
  public form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    valor: new FormControl(),
    cor: new FormControl(),
    detalhes: new FormControl()
  })

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params);
      this.acessorio = params as Acessorio;
      this.form.patchValue(this.acessorio);
      let jsonUsers = localStorage.getItem('acessorios');
      if (jsonUsers != null) {
        this.acessorios = JSON.parse(jsonUsers);
      }
      this.index = this.acessorios.indexOf(this.acessorio);
    })
  }

  public salvar() {
    if (this.form.invalid) {
      alert('Campos invalidos!');
      return;
    }
    this.acessorio = this.form.value;
    console.log('Acessorio', this.acessorio);

    if (this.index >= 0) {
      this.acessorios.splice(this.index, 1, this.acessorio);
    } else {
      this.acessorios.push(this.acessorio);
    }

    localStorage.setItem('acessorios', JSON.stringify(this.acessorios));
    console.table(this.acessorios);
    alert('Salvo com sucesso')
    this.form.reset();
  }
}
