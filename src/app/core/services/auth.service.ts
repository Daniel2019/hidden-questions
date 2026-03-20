import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Admin {
  id: string;
  nome: string;
  senha: string;
}

const ADMINS_KEY = 'hq_admins';
const ADMIN_KEY = 'hq_admin';

const DEFAULT_ADMINS: Admin[] = [
  { id: '1', nome: 'admin', senha: 'admin123' }
];

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {
    if (!localStorage.getItem(ADMINS_KEY)) {
      localStorage.setItem(ADMINS_KEY, JSON.stringify(DEFAULT_ADMINS));
    }
  }

  private getAdmins(): Admin[] {
    return JSON.parse(localStorage.getItem(ADMINS_KEY) || '[]');
  }

  private saveAdmins(admins: Admin[]): void {
    localStorage.setItem(ADMINS_KEY, JSON.stringify(admins));
  }

  login(nome: string, senha: string): Observable<Admin | null> {
    const admins = this.getAdmins();
    const found = admins.find(a => a.nome === nome && a.senha === senha) || null;
    if (found) {
      localStorage.setItem(ADMIN_KEY, JSON.stringify(found));
    }
    return of(found);
  }

  logout(): void {
    localStorage.removeItem(ADMIN_KEY);
  }

  getAdmin(): Admin | null {
    const data = localStorage.getItem(ADMIN_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getAdmin();
  }

  updateStored(admin: Admin): void {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
    const admins = this.getAdmins();
    const idx = admins.findIndex(a => a.id === admin.id);
    if (idx >= 0) {
      admins[idx] = admin;
      this.saveAdmins(admins);
    }
  }
}
