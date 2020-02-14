import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private loader: LoaderLibService) {
    
    loader.loadCss("assets/admin-custom/assets/vendor/bootstrap/css/bootstrap.min.css");
    loader.loadCss("assets/admin-custom/assets/vendor/font-awesome/css/font-awesome.min.css");
    loader.loadCss("assets/admin-custom/assets/vendor/animate-css/vivify.min.css");
  
    loader.loadCss("assets/admin-custom/html/assets/css/site.min.css");


  }

  ngOnInit() {
    var element = document.getElementById("bodyIndex");
     element.classList.add("light_version");
     element.classList.add("theme-cyan");
  }
}
