/* import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterErrorPopupComponent } from '../Pop-Ups/register-error-popup/register-error-popup.component';
import swal from 'sweetalert';
import { ApiConnectionsService } from '../utils/api-connections.service';
import * as _ from 'lodash';
import { Observable, ReplaySubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
  imagePath: any;
  constructor(private _sanitizer: DomSanitizer){}
  
  ngOnInit(): void {}
  sellersPermitFile: any;
  //base64s
  sellersPermitString: any;
  //json
  public picked(event: any, field: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    } else {
      alert('No file selected');
    }
  }
  handleInputChange(files: any) {
    var file = files; */
    //var pattern = /image-*/;
  /*   var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    this.sellersPermitString = base64result;
    console.log('1', this.sellersPermitString);
    
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + this.sellersPermitString);
  }
  
}
 */












/* <p>Input one</p>
<input (change)="picked($event, 1)" type="file" />
<br />
<hr />
<button class="butoncus_sig" id="dnext">Submit</button>
<div class="img">
  <img class="imgSrc" [src]="imagePath">
</div> */