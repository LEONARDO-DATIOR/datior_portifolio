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
      primeiroNome: ['', [Validators.required, Validators.minLength(3)]],  
      sobreNome: '',  
      email: ['', [Validators.required, Validators.email]],        
      mensagem: ''
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log("Dados enviados:", this.formulario.value);
      alert('Olá ' + this.formulario.value.primeiroNome + ' Estou trabalhando no back-end ainda, mas obrigado pela tentativa!');
      this.formulario.reset();
    } 
  }
}
