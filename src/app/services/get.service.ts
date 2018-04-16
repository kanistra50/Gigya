import { Injectable } from '@angular/core';
import { Jsonp, Request, RequestOptionsArgs  } from '@angular/http';
import 'rxjs/add/operator/map';

// Credentials
const UserKey = 'AJA3Cw9XcJZf';
const UserSecret = '1J+YxAY47khnuXf4GKSggLpPFBbQv8Hq';
const APIKey = '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK';

@Injectable()

export class GetService {
  private apiRoot = `https://accounts.ru1.gigya.com/`;
  private getPoliciesUrl = `accounts.getPolicies`;

  constructor(private jsonp: Jsonp) {
    // this.getPoliciesUrl =
    // `https://accounts.${DataCenter}/accounts.getPolicies?uid=<User ID>&apiKey
    // =<Your API-key>&nonce=<nonce>&timestamp=<current unix-time>&sig=<signature>&status=Hello`;
    // `https://accounts.${DataCenter}/accounts.getPolicies&callback=JSONP_CALLBACK`;
    // ?uid=<User ID>&apiKey
    // =<Your API-key>&nonce=<nonce>&timestamp=<current unix-time>&sig=<signature>&status=Hello`;
  }

  public getData() {
     const apiURL = `${this.apiRoot}${this.getPoliciesUrl}&callback=JSONP_CALLBACK`;
    //  const options: RequestOptionsArgs = {};

    //  options.withCredentials = true;
    //  options.method = this.getPoliciesUrl;

     return this.jsonp
                .request(apiURL)
                .map((res) => {
                    res.json();
                    console.warn('GET REQUEST RESULT', res);
                }, (err) => console.log(err));
  }

}

