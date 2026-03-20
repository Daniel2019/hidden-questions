import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ToolbarModule, ButtonModule, AvatarModule, TooltipModule],
  templateUrl: './navbar.html',
  styles: `
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
      text-decoration: none;
    }
    .brand:hover {
      color: #111827;
    }
    .admin-greeting {
      font-size: 13px;
      color: #6b7280;
      margin-right: 8px;
    }
    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    @media (max-width: 576px) {
      .app-toolbar { padding: 6px 16px; }
      .brand { font-size: 16px; }
      .admin-greeting { display: none; }
      .navbar-actions { gap: 2px; }
      ::ng-deep .navbar-actions .p-avatar { display: none; }
    }
  `
})
export class NavbarComponent {
  get admin() {
    return this.authService.getAdmin();
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
