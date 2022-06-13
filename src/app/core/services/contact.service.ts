import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const FORM_URL = 'https://formspree.io/f/xzboorvn';
const CV_URL = 'assets/resources'
const CV_PREFIX = 'janiszyn_cv_';
const CV_SUFFIX = '.pdf';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendForm(body: any) {
    return this.http.post(FORM_URL, body);
  }

  downloadCV(lang: string) {
    const url = `${CV_URL}/${CV_PREFIX}${lang}${CV_SUFFIX}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
