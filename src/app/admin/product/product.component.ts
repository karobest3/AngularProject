import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private loader: LoaderLibService) {

    loader.loadCss("assets/admin-custom/assets/vendor/jquery-datatable/dataTables.bootstrap4.min.css");
    loader.loadCss("assets/admin-custom/assets/vendor/jquery-datatable/fixedeader/dataTables.fixedcolumns.bootstrap4.min.css");
    loader.loadCss("assets/admin-custom/assets/vendor/jquery-datatable/fixedeader/dataTables.fixedheader.bootstrap4.min.css");
    loader.loadCss("assets/admin-custom/assets/vendor/sweetalert/sweetalert.css");
    loader.loadCss("assets/admin-custom/assets/vendor/animate-css/vivify.min.css");
    loader.loadCss("assets/admin-custom/html/assets/css/site.min.css");




    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/datatablescripts.bundle.js');
    // loader.loadScript('../../../assets/admin-custom/assets/vendor/jquery-datatable/buttons/dataTables.buttons.min.js');
    // loader.loadScript('../../../assets/admin-custom/assets/vendor/jquery-datatable/buttons/buttons.bootstrap4.min.js');
    // loader.loadScript('../../../assets/admin-custom/assets/vendor/jquery-datatable/buttons/buttons.colVis.min.js');
    // loader.loadScript('../../../assets/admin-custom/assets/vendor/jquery-datatable/buttons/buttons.html5.min.js');
    // loader.loadScript('../../../assets/admin-custom/assets/vendor/jquery-datatable/buttons/buttons.print.min.js');
    loader.loadScript('../../../assets/admin-custom/assets/vendor/sweetalert/sweetalert.min.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/bundles/mainscripts.bundle.js');
    loader.loadScript('../../../assets/admin-custom/html/assets/js/pages/tables/jquery-datatable.js');
 
  }

  ngOnInit() {
  }

}
