import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SiteUser, Stock, StockType} from './data-classes';
import {URL_ROOT} from './globals';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

const URL_DOG = URL_ROOT + '/api/dog/';
const URL_REGISTER = URL_ROOT + '/api/register/';
const URL_PROFILE = URL_ROOT + '/api/profile/';
const URL_NEW_PASSWORD = URL_ROOT + '/api/update_password/';

const URL_STOCK_TYPE = URL_ROOT + '/api/stock_type/';
const URL_CURRENT_STOCK = URL_ROOT + '/api/current_stock/';
const URL_STOCK = URL_ROOT + '/api/stock/';
const URL_STOCK_SEARCH = URL_ROOT + '/api/stock/search/';
const URL_CLAIM = URL_ROOT + '/api/claim/';
const URL_CURRENT_CLAIM = URL_ROOT + '/api/current_claims/';

@Injectable({
    providedIn: 'root'
})
export class DogService {
    private currentUser: SiteUser;
    private stockTypes: {};

    constructor(
        private http: HttpClient,
    ) {
        this.currentUser = null;
        this.stockTypes = {};
    }

    registerUser(newUser: SiteUser): Observable<any> {
        return this.http.post(URL_REGISTER, {
            password: newUser.password,
            email: newUser.email,
            first_name: newUser.firstName,
            last_name: newUser.lastName,
            provides_stock: newUser.providesStock,
            needs_stock: newUser.needsStock,
            street_1: newUser.street1,
            street_2: newUser.street2,
            city: newUser.city,
            county: newUser.county,
            state: newUser.state,
            zip: newUser.zip,
            phone: newUser.phone,
        });
    }

    submitDogForm(firstName: string, lastName: string, dog: boolean): Observable<any> {
        return this.http.post(URL_DOG, {
            first_name: firstName,
            last_name: lastName,
            do_you_like_dog: dog,
        });
    }
}

