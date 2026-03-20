import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, PasswordModule, ButtonModule, MessageModule],
  templateUrl: './login.html',
  styles: `
    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      min-height: 100dvh;
      padding: 16px;
    }
    .login-card {
      width: 100%;
      max-width: 400px;
      background: #ffffff;
      border-radius: 16px;
      padding: 40px 32px;
      border: 1px solid #e5e7eb;
    }
    .login-title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 4px;
      color: #111827;
    }
    .login-subtitle {
      font-size: 14px;
      color: #6b7280;
      text-align: center;
      margin-bottom: 32px;
    }
    .login-field {
      margin-bottom: 20px;
    }
    .login-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }
    .w-full { width: 100%; }
    .spacer { margin-bottom: 16px; }

    @media (max-width: 576px) {
      .login-page {
        padding: 0;
        align-items: stretch;
      }
      .login-card {
        max-width: none;
        border: none;
        border-radius: 0;
        padding: 48px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        min-height: 100dvh;
      }
      .login-title { font-size: 28px; margin-bottom: 8px; }
      .login-subtitle { font-size: 15px; margin-bottom: 40px; }
      .login-field { margin-bottom: 24px; }
      .login-field label { font-size: 14px; margin-bottom: 8px; }
    }
  `
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  nome = '';
  senha = '';
  erro = signal('');
  carregando = signal(false);

  entrar() {
    if (!this.nome || !this.senha) {
      this.erro.set('Preencha todos os campos.');
      return;
    }

    this.carregando.set(true);
    this.erro.set('');

    this.authService.login(this.nome, this.senha).subscribe({
      next: (admin) => {
        if (admin) {
          this.router.navigate(['/admin']);
        } else {
          this.erro.set('Nome ou senha incorretos.');
          this.carregando.set(false);
        }
      },
      error: () => {
        this.erro.set('Erro ao conectar com o servidor.');
        this.carregando.set(false);
      }
    });
  }
}
