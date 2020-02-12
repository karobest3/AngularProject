import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
    '../../anymore/lib/css/nivo-slider.css',
    '../../anymore/css/core.css',
    '../../anymore/css/shortcode/header.css',
    '../../anymore/css/shortcode/footer.css',
    '../../anymore/css/shortcode/slider.css',
    '../../anymore/style.css',
    '../../anymore/css/responsive.css',
    '../../anymore/css/custom.css',
    '../../anymore/css/style-customizer.css'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
