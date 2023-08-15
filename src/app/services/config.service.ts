import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = new BehaviorSubject<boolean>(false);

  constructor() { }

  showMainConfig(){
    this.config.next(true);
  }
  closeMainConfig(){
    this.config.next(false);
  }
  isMainConfig(){
    return this.config.asObservable();
  }
}
