import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[resizeObserver]',
})
export class ResizeObserverDirective implements OnInit, OnDestroy {
  @Output() sizeChange = new EventEmitter<DOMRectReadOnly>();

  private resizeObserver: ResizeObserver;

  constructor(private el: ElementRef) {
    this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        this.sizeChange.emit(entry.contentRect);
      }
    });
  }

  ngOnInit(): void {
    this.resizeObserver.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver.unobserve(this.el.nativeElement);
  }
}
