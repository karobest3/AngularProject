import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';
import { Category } from 'src/app/models/category';
import { HelperDataService } from 'src/app/service/helper-data.service';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loader: LoaderLibService,private helperService: HelperDataService) {}
  listCategories: Array<Category>;
  listBrands : Array<Brand>;

  ngOnInit() {
    this.helperService.getListObject("categories").subscribe(
      data => {
        console.log(data);
        this.listCategories = data;
      }
    );
    this.helperService.getListObject("brands").subscribe(
      data => {
        console.log(data);
        this.listBrands = data;
        console.log(this.listBrands);
      }
    );
  }


  closeChat() {
    var element = document.getElementById("rightbar");
    element.classList.remove("open");
    var temp = document.getElementById("overlayChat");
    temp.classList.remove("open");
  }
  openChat() {
    // create tag div class overlay if doest not exits
    if (document.getElementById("overlayChat") == null) {
      var div = document.createElement("div");
      div.id = "overlayChat";
      div.classList.add("overlay");
      document.getElementsByTagName("body")[0].appendChild(div);
    }
    var temp = document.getElementById("overlayChat");
    temp.addEventListener("click", function () {
      temp.classList.remove("open");
      var element = document.getElementById("rightbar");
      element.classList.remove("open");
    });
  }

}
