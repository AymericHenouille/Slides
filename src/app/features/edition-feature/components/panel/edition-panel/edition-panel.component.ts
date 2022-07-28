import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Layer } from 'konva/lib/Layer';
import { Rect } from 'konva/lib/shapes/Rect';
import { Stage } from 'konva/lib/Stage';
import { Observable, Subscription } from 'rxjs';
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

  constructor(
    private element: ElementRef,
    private readonly store: Store<{ layers: Layer[] }>
  ) {
    this.layers$ = this.store.select(state => state.layers);
  }

  public ngOnInit(): void {
    this.stage = new Stage({ container: 'canvas', draggable: true });
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.element.nativeElement);
    this.onResize();


    this.stage.add(this.createBackground());
    this.stage.draw();

    this._layers = this.layers$.subscribe(layers => {
      console.log(layers);
      if (layers) {
        this.stage.clear();
        this.stage.add(this.createBackground());
        layers.forEach(layer => this.stage.add(layer));
        this.stage.draw();
      }
    });

    this.store.dispatch(newLayer({
      config: {
        name: 'New Layer',
        id: '1'
      }
    }));
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
  }

}
