import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Layer } from 'konva/lib/Layer';
import { Line } from 'konva/lib/shapes/Line';
import { Rect } from 'konva/lib/shapes/Rect';
import { Stage } from 'konva/lib/Stage';
import { Vector2d } from 'konva/lib/types';
import { Observable, Subscription } from 'rxjs';
import { Mode } from '../../../models/mode.model';
import { newLayer } from '../../../redux/actions/stage.actions';

@Component({
  selector: 'app-edition-panel',
  templateUrl: './edition-panel.component.html',
  styleUrls: ['./edition-panel.component.scss']
})
export class EditionPanelComponent implements OnInit, OnDestroy {

  private stage!: Stage;
  private resizeObserver!: ResizeObserver;
  public layers$!: Observable<Layer[]>;
  private _layers!: Subscription;

  private mode!: Mode;
  private _mode!: Subscription;
  private isPainting: boolean = false;

  constructor(
    private element: ElementRef,
    private readonly store: Store<{ layers: Layer[], mode: Mode }>
  ) {
    this.layers$ = this.store.select(state => state.layers);
  }

  public ngOnInit(): void {
    this.stage = new Stage({ container: 'canvas', draggable: false });
    // this.resizeObserver = new ResizeObserver(() => this.onResize());
    // this.resizeObserver.observe(this.element.nativeElement);
    this.onResize();


    this.stage.add(this.createBackground());
    this.stage.draw();

    this._layers = this.layers$.subscribe(layers => {
      if (layers) {
        this.stage.clear();
        this.stage.getLayers().forEach(layer => layer.destroy());
        this.stage.add(this.createBackground());
        layers.forEach(layer => this.stage.add(layer));
        console.log(this.stage.getLayers());

        this.stage.draw();
      }
    });

    this._mode = this.store.select(state => state.mode).subscribe(mode => this.mode = mode);

    this.store.dispatch(newLayer({
      config: {
        name: 'New Layer',
        id: '1'
      }
    }));


    this.initFreedrawing();
  }

  private initFreedrawing(): void {
    let lastLine: Line;
    this.stage.on('mousedown touchstart', (e) => {
      if (this.mode === Mode.PAINT) {
        this.isPainting = true;
        const pos: Vector2d = this.stage.getPointerPosition() ?? { x: 0, y: 0 };
        lastLine = new Line({
          stroke: '#df4b26',
          strokeWidth: 5,
          globalCompositeOperation: 'source-over',
          // round cap for smoother lines
          lineCap: 'round',
          lineJoin: 'round',
          // add point twice, so we have some drawings even on a simple click
          points: [pos.x, pos.y, pos.x, pos.y],
        });
        this.stage.getLayers().pop()?.add(lastLine);
      }
    });

    this.stage.on('mouseup touchend', () => {
      this.isPainting = false;
    });

    // and core function - drawing
    this.stage.on('mousemove touchmove', (e) => {
      if (!this.isPainting || this.mode !== Mode.PAINT) {
        return;
      }

      // prevent scrolling on touch devices
      e.evt.preventDefault();

      const pos: Vector2d = this.stage.getPointerPosition() ?? { x: 0, y: 0 };
      var newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    });
  }

  private createBackground(): Layer {
    const layer: Layer = new Layer({
      name: 'Background',
      id: '0'
    });
    const { clientWidth, clientHeight } = this.element.nativeElement;
    const width: number = 210;
    const height: number = 297;
    return layer.add(new Rect({
      x: clientWidth / 2 - width / 2,
      y: clientHeight / 2 - height / 2,
      width,
      height,
      fill: 'white',
    }));
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
    this._layers?.unsubscribe();
    this._mode?.unsubscribe();
  }

}
