import { Component } from '@angular/core';
import { Header } from '../../models/header.model';

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
          action: this.fileNew
        },
        {
          icon: 'folder_open',
          text: 'Open',
          action: this.fileOpen
        },
        {
          icon: 'save',
          text: 'Save',
          action: this.fileSave
        },
        {
          icon: 'save_as',
          text: 'Save as',
          action: this.fileSaveAs
        },
      ]
    },
    {
      header: 'Edit',
      subHeaders: [
        {
          icon: 'content_copy',
          text: 'Copy',
          action: this.editCopy
        },
        {
          icon: 'content_cut',
          text: 'Cut',
          action: this.editCut
        },
        {
          icon: 'content_paste',
          text: 'Paste',
          action: this.editPaste
        }
      ]
    },
    {
      header: 'Tools',
      subHeaders: [
        {
          icon: 'open_with',
          text: 'Move',
          action: this.toolsMove
        },
        {
          icon: 'edit',
          text: 'Pen',
          action: this.toolsPen
        },
        {
          icon: 'format_color_fill',
          text: 'Bucket',
          action: this.toolsBucket
        }
      ]
    },
    {
      header: 'Shapes',
      subHeaders: [
        {
          icon: 'rectangle',
          text: 'Rectangle',
          action: this.shapesRectangle
        },
        {
          icon: 'circle',
          text: 'Circle',
          action: this.shapesCircle
        },
        {
          icon: 'change_history',
          text: 'Triangle',
          action: this.shapesTriangle
        }
      ]
    },
    {
      header: 'Windows',
      subHeaders: [
        {
          icon: 'account_tree',
          text: 'Files Tree',
          action: this.windowsTree
        },
        {
          icon: 'tune',
          text: 'Settings',
          action: this.windowsSettings
        },
        {
          icon: 'slideshow',
          text: 'Slideshow',
          action: this.windowsSlideshow
        },
      ]
    },
  ]

  constructor() { }

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

  }

  private toolsPen(): void {

  }

  private toolsBucket(): void {

  }

  private shapesRectangle(): void {

  }

  private shapesCircle(): void {

  }

  private shapesTriangle(): void {

  }

  private windowsTree(): void {

  }

  private windowsSettings(): void {

  }

  private windowsSlideshow(): void {

  }

}
