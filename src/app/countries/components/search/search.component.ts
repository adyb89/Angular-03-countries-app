import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = 'Buscar...';

  @Output('onEnter') input: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter<string>();
  
  debouncer: Subject<string> = new Subject();
  term: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
        .pipe(debounceTime(300))
        .subscribe(value => {
          this.onDebouncer.emit(value);
        });
  }

  search(): void {
    if ( this.term ) {
      this.input.emit(this.term);
    }
  }

  pressedKey(): void {
    this.debouncer.next(this.term);
  }
}
