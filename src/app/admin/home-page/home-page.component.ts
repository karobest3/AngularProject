import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private loader: LoaderLibService) {

    // loader.loadScript('../../../../node_modules/jquery/dist/jquery.min.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/libscripts.bundle.js');
    // loader.loadScript('../../../assets/admin-custom/html/assets/bundles/vendorscripts.bundle.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/c3.bundle.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/mainscripts.bundle.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/js/index.js');
  }

  ngOnInit() {
  }

}
