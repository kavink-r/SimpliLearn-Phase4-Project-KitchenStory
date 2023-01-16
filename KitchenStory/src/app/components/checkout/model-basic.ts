import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cart } from 'src/app/models/cart';
import { CartserviceService } from 'src/app/services/cartservice.service';

@Component({
	selector: 'ngbd-modal-basic',
	standalone: true,
	imports: [NgbDatepickerModule],
	templateUrl: './model-basic.html',
})
export class NgbdModalBasic {
	closeResult = '';
	cart:Cart=new Cart();
	constructor(private modalService: NgbModal,
		private cartservice:CartserviceService,
		private router:Router) {}
	
	open(content:any) {
		this.cart=this.cartservice.getCart();
		if(!(this.cart.totalprice === 0)){
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				if(result==='Save click'){
					alert('Payment of ₹' +this.cart.totalprice + ' confirmed');
					this.router.navigateByUrl("");
					this.cartservice.resetCart();
				}

			},
			(reason) => {
				console.log(reason);
				if (reason === ModalDismissReasons.ESC) {
					alert('payment cancelled');
				} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
					alert('payment cancelled');
				}
				else if(reason ==='Cross click'){
					alert('payment cancelled');
					
				} else {
					
				}
			},
		);
		}
		else{
			alert("Kindly add items to cart!!");
		}
	}

	
}