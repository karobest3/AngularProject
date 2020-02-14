import { Component, OnInit } from '@angular/core';
import { LoaderLibService } from 'src/app/service/loader-lib.service';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { UploadFirebaseService } from 'src/app/service/upload-firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  imgSrc: string;
  selectImage: any = null;
  isSubmitted: boolean;
  // test fire base
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),

  })





  constructor(private loader: LoaderLibService, private storage: AngularFireStorage, private uploadService : UploadFirebaseService) {
    loader.loadScript('../../../../assets/user-custom/js/popper.min.js');
    loader.loadScript('../../../../assets/user-custom/js/bootstrap.min.js');
    loader.loadScript('../../../../assets/user-custom/lib/js/jquery.nivo.slider.js');
    // loader.loadScript('../../../../assets/user-custom/js/plugins.js');
    loader.loadScript('../../../../assets/user-custom/js/main.js');
  }

  ngOnInit() {
    this.resetForm();
  }


  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {

      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectImage = event.target.files[0];
    } else {
    
      this.imgSrc = 'assets/user-custom/images/logo/logo.png';
      this.selectImage = null;
    }
  }
  downloadURL:any;
  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectImage.name.split('.').
      slice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => { 
            this.downloadURL = url;  
            console.log("the URL" +this.downloadURL);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: ''
    });
    this.imgSrc = 'assets/user-custom/images/logo/logo.png';
    this.selectImage = null;
    this.isSubmitted = false;
  }
}
