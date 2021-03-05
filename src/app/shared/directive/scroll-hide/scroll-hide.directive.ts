import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective implements OnInit {

  @Input('appScrollHide') header: any;

  private scroll = 0;

  constructor(
    private renderer: Renderer2,
    private dom: DomController
  ) { }

  ngOnInit(): void {
    this.header = this.header.el;
    this.dom.write(() => {
      this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
    });
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    if ($event.detail.scrollTop > this.scroll) {
      this.dom.write(() => {
        this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
      });
    } else {
      this.dom.write(() => {
        this.renderer.setStyle(this.header, 'margin-top', '0');
      });
    }

    this.scroll = $event.detail.scrollTop;
  }
}
