import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* PrimeNG Components */
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-mockup',
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    BadgeModule,
    TagModule,
    DialogModule,
    TextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    ToastModule,
    DividerModule,
    AvatarModule,
    TooltipModule,
    MessageModule,
    ProgressSpinnerModule,
    FloatLabelModule,
  ],
  templateUrl: './mockup.html',
  styles: `
    :host {
      display: block;
      background: #f8f9fa;
      min-height: 100vh;
      color: #374151;
    }

    .mockup-nav {
      display: flex;
      gap: 12px;
      padding: 16px 24px;
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .mockup-section {
      padding: 40px 24px;
      max-width: 900px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #6b7280;
      margin-bottom: 24px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e5e7eb;
    }

    .section-divider {
      border: none;
      border-top: 2px solid #e5e7eb;
      margin: 48px 0;
    }

    /* Login */
    .login-wrapper {
      display: flex;
      justify-content: center;
      padding: 40px 0;
    }
    .login-card {
      width: 400px;
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

    /* Navbar */
    .app-toolbar {
      background: #ffffff !important;
      border-bottom: 1px solid #e5e7eb;
      padding: 8px 24px;
      border-radius: 0;
    }
    .brand {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      letter-spacing: -0.5px;
    }
    .admin-greeting {
      font-size: 13px;
      color: #6b7280;
      margin-right: 8px;
    }

    /* Dashboard */
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .dashboard-header h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0;
    }
    .stats-row {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;
    }
    .stat-card {
      flex: 1;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
    }
    .stat-card .stat-value {
      font-size: 28px;
      font-weight: 700;
      color: #111827;
    }
    .stat-card .stat-label {
      font-size: 13px;
      color: #6b7280;
      margin-top: 4px;
    }
    .tema-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tema-card:hover {
      border-color: #6366f1;
      background: #eef2ff;
    }
    .tema-card .tema-info h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 6px 0;
    }
    .tema-card .tema-info p {
      font-size: 13px;
      color: #6b7280;
      margin: 0;
    }
    .tema-card .tema-meta {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    /* Modal */
    .modal-field {
      margin-bottom: 20px;
    }
    .modal-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }

    /* Tema Detalhe */
    .tema-header {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .tema-header-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
    .tema-header h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 4px 0;
    }
    .tema-header p {
      color: #6b7280;
      font-size: 14px;
      margin: 0;
    }
    .link-section {
      background: #f3f4f6;
      border-radius: 8px;
      padding: 12px 16px;
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .link-section .link-text {
      flex: 1;
      font-size: 13px;
      color: #6b7280;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .pergunta-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 16px 20px;
      margin-bottom: 10px;
    }
    .pergunta-card p {
      color: #374151;
      margin: 0 0 8px 0;
      font-size: 15px;
    }
    .pergunta-card small {
      color: #9ca3af;
      font-size: 12px;
    }

    /* Configurações */
    .config-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 16px;
    }
    .config-card h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 20px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .config-field {
      margin-bottom: 16px;
    }
    .config-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }

    /* Página Pública */
    .public-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 16px;
    }
    .public-card {
      width: 480px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 36px 32px;
    }
    .public-card h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 4px 0;
    }
    .public-card .desc {
      color: #6b7280;
      font-size: 14px;
      margin: 0 0 24px 0;
    }
    .public-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }
    .public-success {
      text-align: center;
      padding: 20px 0;
    }
    .public-success i {
      font-size: 48px;
      color: #22c55e;
      margin-bottom: 16px;
    }
    .public-success h3 {
      font-size: 20px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 8px 0;
    }
    .public-success p {
      color: #6b7280;
      font-size: 14px;
      margin: 0 0 20px 0;
    }

    /* Empty State */
    .empty-state {
      text-align: center;
      padding: 48px 0;
    }
    .empty-state i {
      font-size: 48px;
      color: #d1d5db;
      margin-bottom: 16px;
    }
    .empty-state h3 {
      font-size: 18px;
      font-weight: 600;
      color: #6b7280;
      margin: 0 0 8px 0;
    }
    .empty-state p {
      font-size: 14px;
      color: #9ca3af;
      margin: 0;
    }

    /* Utilities */
    .w-full { width: 100%; }
    .text-right { text-align: right; }
    .mt-12 { margin-top: 12px; }
    .mt-16 { margin-top: 16px; }
    .mb-20 { margin-bottom: 20px; }
    .back-link {
      color: #6b7280;
      text-decoration: none;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 24px;
      cursor: pointer;
    }
    .back-link:hover { color: #374151; }
    .icon-muted { color: #9ca3af; }
    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .tema-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .perguntas-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 16px;
    }
    .alt-section {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }
    .section-title--with-padding {
      padding: 0 24px;
      margin-top: 40px;
    }
    .powered-by {
      text-align: center;
      margin-top: 24px;
      font-size: 12px;
      color: #9ca3af;
    }
    .powered-by strong { color: #6b7280; }
    .mockup-footer {
      padding: 48px;
      text-align: center;
      color: #d1d5db;
      font-size: 13px;
    }
    ::ng-deep .dialog-md { width: 450px; }
  `
})
export class MockupComponent {
  modalNovoTema = false;
  perguntaMock = '';
  nomeMock = '';
  senhaMock = '';
  novoTemaTitle = '';
  novoTemaDesc = '';
  novoNomeMock = 'Admin';
  novaSenhaMock = '';
  confirmarSenhaMock = '';

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
