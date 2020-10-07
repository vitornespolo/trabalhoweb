import { Veiculo } from './../../../models/veiculo';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.scss']
})
export class VeiculoCadastroComponent implements OnInit {

  public veiculo:Veiculo = new Veiculo();
  public form:FormGroup = new FormGroup({
    modelo:new FormControl(''),
    cor: new FormControl(),
    placa:new FormControl(),
    valor:new FormControl()
  })
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params)=>{
      console.log(params);
      this.veiculo = params as Veiculo;
      this.form.patchValue(this.veiculo);
    })
  }

  public salvar(){
    if (this.form.invalid){
      alert('Campos invalidos!');
      return;
    }
    this.veiculo = this.form.value;
    console.log('Veiculo', this.veiculo);
    let jsonUsers = localStorage.getItem('veiculos');
    let veiculos:Veiculo[] = []
    if (jsonUsers != null){
      veiculos = JSON.parse(jsonUsers);
    }
    veiculos.push(this.veiculo); 
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    console.table(veiculos);
    alert('Salvo com sucesso')
    this.form.reset();
  }


}
