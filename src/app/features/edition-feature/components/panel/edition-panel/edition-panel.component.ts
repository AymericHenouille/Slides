import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Layer } from 'konva/lib/Layer';
import { Rect } from 'konva/lib/shapes/Rect';
import { Stage } from 'konva/lib/Stage';

@Component({
  selector: 'app-edition-panel',
  templateUrl: './edition-panel.component.html',
  styleUrls: ['./edition-panel.component.scss']
})
export class EditionPanelComponent implements OnInit, OnDestroy {

  private stage!: Stage;
  private resizeObserver!: ResizeObserver;

  constructor(private element: ElementRef) { }

  public ngOnInit(): void {
    this.stage = new Stage({ container: 'canvas', draggable: true });
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.element.nativeElement);
    this.onResize();

    const layer: Layer = new Layer();
    layer.add(this.createPage());
    this.stage.add(layer);
    this.stage.draw();
  }

  private createPage(): Rect {
    const { clientWidth, clientHeight } = this.element.nativeElement;
    const width: number = 210;
    const height: number = 297;
    return new Rect({
      x: clientWidth / 2 - width / 2,
      y: clientHeight / 2 - height / 2,
      width,
      height,
      fill: 'white',
    });;
  }

  private onResize(): void {
    const { clientWidth, clientHeight } = this.element.nativeElement;
    this.stage.width(clientWidth);
    this.stage.height(clientHeight);
  }

  public ngOnDestroy(): void {
    this.resizeObserver.unobserve(this.element.nativeElement);
    this.resizeObserver.disconnect();
    this.stage.destroy();
  }

}
