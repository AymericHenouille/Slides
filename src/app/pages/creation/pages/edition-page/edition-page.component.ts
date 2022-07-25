import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BottomPanelComponent } from '../../components/bottom-panel/bottom-panel.component';
import { CenterPanelComponent } from '../../components/center-panel/center-panel.component';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { RightPanelComponent } from '../../components/right-panel/right-panel.component';

@Component({
  selector: 'app-edition-page',
  templateUrl: './edition-page.component.html',
  styleUrls: ['./edition-page.component.scss']
})
export class EditionPageComponent implements AfterViewInit {

  @ViewChild(LeftPanelComponent)
  public leftPanelComponent!: LeftPanelComponent;

  @ViewChild(RightPanelComponent)
  public rightPanelComponent!: RightPanelComponent;

  @ViewChild(CenterPanelComponent)
  public centerPanelComponent!: CenterPanelComponent;

  @ViewChild(BottomPanelComponent)
  public bottomPanelComponent!: BottomPanelComponent;

  public ngAfterViewInit(): void {

  }

}
