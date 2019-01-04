import {Injectable} from "@angular/core";
import {BaseRequestOptions, Headers} from "@angular/http";


/**
 * Created by Bahgat on 1/12/16.
 */
@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions{
    headers:Headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8'
    });
}