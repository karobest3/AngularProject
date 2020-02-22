import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';
import { HelperDataService } from 'src/app/service/helper-data.service';
import { Phone } from 'src/app/models/phone';
import { Laptop } from 'src/app/models/laptop';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  sub: Subscription;
  listPhones: Array<Phone>;
  listLaptops: Array<Laptop>;
  paramBrand: string;
  keyBrand: string;
  keyCategory: string;

  constructor(private loader: LoaderLibService, private helperService: HelperDataService, private activatedRoute: ActivatedRoute) {
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
   
    // get param brand in url
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.keyBrand = paramMap.get('brand');
      this.keyCategory = paramMap.get('category');
      const meaning = this.helperService.getListObjectByBrand(this.keyCategory, this.keyBrand);
      meaning.toPromise().then(data => {
        if (this.keyCategory === "phone") {
          this.listPhones = data;
        } else {
          this.listLaptops = data;
        }
      }).then(data => {
        console.log(this.keyBrand);
        console.log(this.keyCategory);
        if (this.keyCategory === "phone") {
          console.log(this.listPhones);
        } else {
          console.log(this.listLaptops);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getIndexPagination(){
    // var e = document.querySelectorAll('.paginate_button.active');
  }
}
