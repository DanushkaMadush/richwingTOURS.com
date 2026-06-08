import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactApiService } from '../../../core/services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {
  constructor(private readonly contactApi: ContactApiService) {}

  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    subject: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  protected isSubmitting = false;
  protected submitMessage = '';

  protected submit(): void {
    this.submitMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    this.contactApi.submitMessage(this.form.getRawValue()).subscribe({
      next: (result) => {
        this.submitMessage = result.message;
        this.isSubmitting = false;
      },
      error: () => {
        this.submitMessage = 'Sorry, the contact service is not available yet. Please contact us directly by email or WhatsApp.';
        this.isSubmitting = false;
      }
    });
  }

  protected hasError(controlName: keyof ContactFormComponent['form']['controls']): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
