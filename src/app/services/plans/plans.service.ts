import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config, Observable} from 'rxjs';

import { Plan } from '../../classes/plan';
import { configAPI } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  constructor(private http: HttpClient) { }

  fetchPlans(userId): Observable<Plan[]> {
    return this.http.get(`${configAPI.baseUrl}${configAPI.entities.plans}?userId=${userId}`);
  }
}
