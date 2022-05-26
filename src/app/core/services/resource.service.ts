import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';

const BASE_URL = 'assets/resources';

export enum ResourceType {
  EDUCATION = 'education',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
}

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  getResource(type: ResourceType): Observable<any> {
    const url = `${BASE_URL}/${type}.json`;

    return this.http.get<any>(url);
  }
}
