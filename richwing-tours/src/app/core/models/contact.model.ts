export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  whatsappUrl: string;
}

export interface ContactFormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}
