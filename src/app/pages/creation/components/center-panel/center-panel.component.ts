import { Component, OnInit } from '@angular/core';
import { Layer } from 'konva/lib/Layer';
import { Rect } from 'konva/lib/shapes/Rect';
import { Stage } from 'konva/lib/Stage';

@Component({
  selector: 'app-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.scss']
})
export class CenterPanelComponent implements OnInit {

  public ngOnInit(): void {
    const stage: Stage = new Stage({
      container: 'canvas',
      height: 700,
      width:700,
    });

    const background: Layer = new Layer();
    const layer: Layer = new Layer();

    background.add(new Rect({
      x: 0,
      y: 0,
      width: 700,
      height: 700,
      fill: 'white',
    }));

    layer.add(new Rect({
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: 'red',
      draggable: true,
    }));

    stage.add(background);
    stage.add(layer);

    stage.draw();
  }

}
