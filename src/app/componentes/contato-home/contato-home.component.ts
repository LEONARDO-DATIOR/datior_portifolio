import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // Importando módulos necessários
  templateUrl: './contato-home.component.html',
})


export class ContatoHomeComponent {
  formulario: FormGroup;
  campoFocado: boolean = false;

  constructor(private VariavelFormBuilder: FormBuilder) {
    this.formulario = this.VariavelFormBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],  
      email: ['', [Validators.required, Validators.email]],        
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log("Dados enviados:", this.formulario.value);
      alert('Formulário enviado com sucesso!');
      this.formulario.reset();
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}
