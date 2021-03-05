import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/core/auth/credentials.service';

@Component({
  selector: 'app-account-logout',
  templateUrl: './account-logout.component.html',
  styleUrls: ['./account-logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountLogoutComponent implements OnInit {

  constructor(
    private credentialsService: CredentialsService,
  ) { }

  ngOnInit(): void {
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

}
