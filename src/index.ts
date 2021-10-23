import {Observable, Observer, of} from 'rxjs';
import {ajax, AjaxError, AjaxResponse} from 'rxjs/ajax';
import {map, pluck, catchError} from "rxjs/operators";

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: (err: any) => console.warn('error en subs: ', err),
    complete: () => console.info('complete')
};



