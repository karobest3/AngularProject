import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loader: LoaderLibService) {

    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/mainscripts.bundle.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/js/index.js');
  }

  ngOnInit() {
  }

}
