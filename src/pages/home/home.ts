import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private scanData: any;

  constructor(private navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
        
  }

  scanBarcode() {
    this.barcodeScanner.scan()
      .then((barcodeData) => {
       // Success! Barcode data is here
       if (barcodeData.cancelled) {
         this.scanData = 'User cancelled the action!';

         return false;
       }
       this.scanData = barcodeData.text;
     }, (err) => {
       this.scanData = 'Unable to scan. please try again!';
     });
  }
}
