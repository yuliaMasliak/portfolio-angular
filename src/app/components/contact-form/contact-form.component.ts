import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/shared/form-handler.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  isSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
  ) {}

  feedbackForm = this.fb.group({
    Email: ['', [Validators.email, Validators.required]],
    Message: ['', [Validators.required]]
  });
  onSubmit() {
    this.isSubmitted = true;
    const feedbackData = {
      Email: this.feedbackForm.get('Email')!.value || '',
      Message: this.feedbackForm.get('Message')!.value || ''
    };
    this.netlifyForms.submitFeedback(feedbackData).subscribe(() => {
      this.feedbackForm.reset();
    });
  }
}
