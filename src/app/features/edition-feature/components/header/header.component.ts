import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Layer } from 'konva/lib/Layer';
import { Header } from '../../models/header.model';
import { Mode } from '../../models/mode.model';
import { modeFill, modePaint, modeSelect } from '../../redux/actions/mode.actions';
import { newCircle, newRectangle, newTriangle } from '../../redux/actions/shapes.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public headers: Header[] = [
    {
      header: 'Files',
      subHeaders: [
        {
          icon: 'note_add',
          text: 'New',
          action: this.fileNew.bind(this)
        },
        {
          icon: 'folder_open',
          text: 'Open',
          action: this.fileOpen.bind(this)
        },
        {
          icon: 'save',
          text: 'Save',
          action: this.fileSave.bind(this)
        },
        {
          icon: 'save_as',
          text: 'Save as',
          action: this.fileSaveAs.bind(this)
        },
      ]
    },
    {
      header: 'Edit',
      subHeaders: [
        {
          icon: 'content_copy',
          text: 'Copy',
          action: this.editCopy.bind(this)
        },
        {
          icon: 'content_cut',
          text: 'Cut',
          action: this.editCut.bind(this)
        },
        {
          icon: 'content_paste',
          text: 'Paste',
          action: this.editPaste.bind(this)
        }
      ]
    },
    {
      header: 'Tools',
      subHeaders: [
        {
          icon: 'open_with',
          text: 'Move',
          action: this.toolsMove.bind(this)
        },
        {
          icon: 'edit',
          text: 'Pen',
          action: this.toolsPen.bind(this)
        },
        {
          icon: 'format_color_fill',
          text: 'Bucket',
          action: this.toolsBucket.bind(this)
        }
      ]
    },
    {
      header: 'Shapes',
      subHeaders: [
        {
          icon: 'rectangle',
          text: 'Rectangle',
          action: this.shapesRectangle.bind(this)
        },
        {
          icon: 'circle',
          text: 'Circle',
          action: this.shapesCircle.bind(this)
        },
        {
          icon: 'change_history',
          text: 'Triangle',
          action: this.shapesTriangle.bind(this)
        }
      ]
    },
    {
      header: 'Windows',
      subHeaders: [
        {
          icon: 'account_tree',
          text: 'Files Tree',
          action: this.windowsTree.bind(this)
        },
        {
          icon: 'tune',
          text: 'Settings',
          action: this.windowsSettings.bind(this)
        },
        {
          icon: 'slideshow',
          text: 'Slideshow',
          action: this.windowsSlideshow.bind(this)
        },
      ]
    },
  ]

  constructor(
    private readonly store: Store<{ layers: Layer[], mode: Mode }>
  ) { }

  private fileNew(): void {

  }

  private fileOpen(): void {

  }

  private fileSave(): void {

  }

  private fileSaveAs(): void {

  }

  private editCopy(): void {

  }

  private editCut(): void {

  }

  private editPaste(): void {

  }

  private toolsMove(): void {
    this.store.dispatch(modeSelect());
  }

  private toolsPen(): void {
    this.store.dispatch(modePaint());

  }

  private toolsBucket(): void {
    this.store.dispatch(modeFill());

  }

  private shapesRectangle(): void {
    this.store.dispatch(newRectangle({
      config: {
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        fill: 'red',
        draggable: true
      },
      layerIndex: 1
    }));
  }

  private shapesCircle(): void {
    this.store.dispatch(newCircle({
      config: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: 'blue',
        draggable: true
      },
      layerIndex: 1
    }));
  }

  private shapesTriangle(): void {
    this.store.dispatch(newTriangle({
      config: {
        radius: 50,
        sides: 3,
        x: 100,
        y: 100,
        fill: 'green',
        draggable: true
      },
      layerIndex: 1
    }));
  }

  private windowsTree(): void {

  }

  private windowsSettings(): void {

  }

  private windowsSlideshow(): void {

  }

}
