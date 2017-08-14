import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private itemId: any;
  private scanData: any;
  private showError: boolean = false;  

  constructor(private barcodeScanner: BarcodeScanner, private userService: UserService) {
        
  }

  scanBarcode() {
      this.barcodeScanner.scan()
          .then((barcodeData) => {
              // Success! Barcode data is here
           if (barcodeData.cancelled) {
               console.log('User Cancelled the action');
               
               return false;
           }
           this.userService.getItemDetails(barcodeData.text)
              .subscribe((res) => {
                  this.scanData = res.json().user;
              }, (err) => {
                  this.showError = true;
              });   
         }, (err) => {
              this.showError = true;
         });
  }

  getDetails() {
      this.userService.getItemDetails(this.itemId)
          .subscribe((res) => {
              this.scanData = res.json().user;
          }, (err) => {
              this.showError = true;
          });
  }
}
