import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../models/login-user.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.template.html',
	styleUrls: ['./login.styles.css']
})
export class LoginComponent implements OnInit {

	protected model: LoginUser;

	constructor() {
		
		this.model = new LoginUser();

	}

	ngOnInit() {
	}

	/**
	 * Inicia sesión
	 */
	login() {
		console.warn('===================');
		console.log(`Loggin: `, this.model);
		console.warn('===================');
	}

}
