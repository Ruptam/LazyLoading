import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private changeDetector: ChangeDetectorRef, private commonService : CommonService) { }

  ngOnInit(): void {
    localStorage.removeItem('isLoggedIn');
    this.commonService.isLoggedIn = false;
    setTimeout(() => {
      this.changeDetector.detectChanges();
    },500)
    this.router.navigate(['/login']);
  }

}
