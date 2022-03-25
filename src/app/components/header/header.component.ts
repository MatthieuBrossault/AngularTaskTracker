import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddBtn: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((val) => this.showAddBtn = val)
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddBtn();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
