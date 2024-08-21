import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  video: File | null = null;
  prompt : string = '';
  method : string = '';
  imageUrl : string | null = null;

  constructor(private apiService: ApiService) { }

  onFileSelected(event: any): void {
    this.video = event.target.files[0];
  }

  onSubmit(): void {
    if (this.video && this.prompt && this.method) {
      this.apiService.getFrame(this.prompt, this.method, this.video!).subscribe(
        {
          next:(response) => this.imageUrl = response.imageUrl,
          error:(err) => alert(err)
        }
      )
    }
  }
}
