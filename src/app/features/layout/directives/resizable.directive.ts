import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

export type ResizeDirection = 'top' | 'left' | 'bottom' | 'right';

type BorderInfo = { top: number, left: number, bottom: number, right: number };

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective implements OnInit {

  @Input() public appResizable: ResizeDirection[] = [];
  private direcationMatch: ResizeDirection | undefined;

  @HostBinding('style.height.px')
  public height!: number;
  @HostBinding('style.width.px')
  public width!: number;

  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    this.height = this.elementRef.nativeElement.offsetHeight;
    this.width = this.elementRef.nativeElement.offsetWidth;
  }

  @HostListener('mousedown', ['$event'])
  public mouseDown(event: MouseEvent): void {
    const direcationMatch: ResizeDirection | undefined = this.locationTouch(event);
    if (direcationMatch && this.appResizable.includes(direcationMatch)) {
      this.direcationMatch = direcationMatch;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  public mouseup(): void { this.direcationMatch = undefined; }

  @HostListener('document:mousemove', ['$event'])
  public mouseover(event: MouseEvent): void {
    switch (this.direcationMatch) {
      case 'top':
        this.height = this.height + event.movementY;
        break;
      case 'left':
        this.width = this.width + event.movementX;
        break;
      case 'bottom':
        this.height = this.height - event.movementY;
        break;
      case 'right':
        this.width = this.width + event.movementX;
        break;
    }
  }

  private locationTouch(event: MouseEvent): ResizeDirection | undefined {
    if (event.offsetX < this.borderInfos.left) {
      return 'left';
    } else if (event.offsetX > this.elementRef.nativeElement.offsetWidth - this.borderInfos.right) {
      return 'right';
    } else if (event.offsetY < this.borderInfos.top) {
      return 'top';
    } else if (event.offsetY > this.elementRef.nativeElement.offsetHeight - this.borderInfos.bottom) {
      return 'bottom';
    };
    return undefined;
  }

  private get borderInfos(): BorderInfo {
    const declaration: CSSStyleDeclaration = getComputedStyle(this.elementRef.nativeElement);
    return {
      top: parseFloat(declaration.getPropertyValue('border-top-width')),
      left: parseFloat(declaration.getPropertyValue('border-left-width')),
      bottom: parseFloat(declaration.getPropertyValue('border-bottom-width')),
      right: parseFloat(declaration.getPropertyValue('border-right-width')),
    };
  }
}
