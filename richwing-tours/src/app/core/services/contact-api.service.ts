import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ContactFormValue, ContactSubmissionResult } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  // TODO: Replace this mock with an HttpClient POST when the backend contact endpoint is available.
  private readonly endpoint = '/api/contact';

  submitMessage(value: ContactFormValue): Observable<ContactSubmissionResult> {
    void this.endpoint;
    void value;

    return of({
      success: true,
      message: 'Your message is ready to be sent once the contact API is connected.'
    }).pipe(delay(300));
  }
}
