import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Layer } from 'konva/lib/Layer';
import { Circle } from 'konva/lib/shapes/Circle';
import { Transformer } from 'konva/lib/shapes/Transformer';
import { Stage } from 'konva/lib/Stage';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
})
export class SlideComponent implements OnInit, OnDestroy {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const stage: Stage = new Stage({
      container: 'container',
      width: window.innerWidth,
      height: window.innerHeight
    });

    const layer: Layer = new Layer();

    const circle: Circle = new Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });

    const circleGreen: Circle = new Circle({
      x: stage.width() / 2 + 70,
      y: stage.height() / 2 + 70,
      radius: 70,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
      draggable: true,
    });

    const transformer: Transformer = new Transformer();

    layer.add(transformer, circle, circleGreen);

    stage.add(layer);

    stage.draw();

  }

  public ngOnDestroy(): void {

  }

}
