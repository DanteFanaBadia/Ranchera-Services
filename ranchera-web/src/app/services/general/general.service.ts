import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  $isLoading = new BehaviorSubject<boolean>(null);

  constructor() { }

  activeLoading(){
    this.$isLoading.next(true);
  }

  desActiveLoading(){
    this.$isLoading.next(false);
  }

  getCurrentLoadingValue(){
    return this.$isLoading.getValue();
  }

  watch(): Observable<boolean>{
    return this.$isLoading;
  }
}
