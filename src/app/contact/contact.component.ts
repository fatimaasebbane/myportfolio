import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  
  //constructor(private http: HttpClient) { }

  sendForm(formData: any) {
   //  return this.http.post('URL_BACKEND', formData);
  }
  
   onSubmit() {
  const formData = {
    name: this.name,
    email: this.email,
    message: this.message
  };

  //this.sendForm(formData).subscribe(response => {
   // console.log('Réponse du backend:', response);
 // });
}
 

}
