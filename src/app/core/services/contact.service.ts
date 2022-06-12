import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const FORM_URL = 'https://formspree.io/f/xzboorvn';
const CV_URL = 'assets/resources'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendForm(body: any) {
    return this.http.post(FORM_URL, body);
  }

  downloadCV() {
    const url = `${CV_URL}/AJCVPL.pdf`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
