import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss',

  ]

})
export class MainComponent implements OnInit {

  constructor(private loader: LoaderLibService) {
    loader.loadCss("assets/user-custom/css/bootstrap.min.css");
    loader.loadCss("assets/user-custom/css/shortcode/shortcodes.css");
    loader.loadCss("assets/user-custom/lib/css/nivo-slider.css");
    loader.loadCss("assets/user-custom/css/core.css");
    loader.loadCss("assets/user-custom/style.css");
    loader.loadCss("assets/user-custom/css/responsive.css");
    loader.loadCss("assets/user-custom/css/custom.css");
    loader.loadCss("assets/user-custom/css/style-customizer.css");

  }
  ngOnInit() {
  }
}