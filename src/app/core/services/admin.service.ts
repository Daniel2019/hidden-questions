import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Admin, AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private authService = inject(AuthService);

  update(id: string, changes: Partial<Admin>): Observable<Admin> {
    const admin = this.authService.getAdmin();
    if (admin && admin.id === id) {
      const updated = { ...admin, ...changes };
      this.authService.updateStored(updated);
      return of(updated);
    }
    return of({ id, nome: '', senha: '', ...changes } as Admin);
  }
}
