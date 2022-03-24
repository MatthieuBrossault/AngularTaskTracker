import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddBtn: boolean = false;
  private subject = new Subject<boolean>();

  constructor() { }

  toggleAddBtn(): void {
    this.showAddBtn = ! this.showAddBtn;
    this.subject.next(this.showAddBtn);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
