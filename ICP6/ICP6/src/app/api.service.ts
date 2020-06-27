import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {query} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  private appId = '156bbfef';
  private appKey = 'bcc55753497b46e8466f510b00ad4a99';
  private clientId = '4T3K4M520CPRWKHCFPSPISI002RC40VQEBISF3UJZJTGGES0';
  private clientSecret = '&client_secret=BOR4MT30WDA34W0YUEPA4B3GBLVKLQHBLBUHH0YVXETF0W4I';

  recipeFinder = (query1) => {
    const url = 'https://api.edamam.com/search?q=' + query1 +
      '&app_id=' + this.appId + '&app_key=' + this.appKey + '&from=0&to=3&calories=591-722&health=alcohol-free';
    return this.httpClient.get(url);
  }

  placeFinder = (search) => {
    const url = 'https://api.foursquare.com/v2/venues/explore?client_id=' + this.clientId + this.clientSecret +
      '&v=20180323&limit=1&ll=40.7243,-74.0018&query=' + search;
    return this.httpClient.get(url);
  }
}
