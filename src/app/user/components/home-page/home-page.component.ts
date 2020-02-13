import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private loader: LoaderLibService) {

    loader.loadScript('../../../../assets/user-custom/js/popper.min.js');
    loader.loadScript('../../../../assets/user-custom/js/bootstrap.min.js');
    loader.loadScript('../../../../assets/user-custom/lib/js/jquery.nivo.slider.js');
    loader.loadScript('../../../../assets/user-custom/js/main.js');
  }

  ngOnInit() {
  }

}
