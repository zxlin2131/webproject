import {Component, OnInit} from '@angular/core';
import {DogService} from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
    firstName: string;
    lastName: string;
    dog: boolean;
    errorMessage = '';
    success = false;
  constructor(
       private apiService: DogService,
  ) { }

  ngOnInit(): void {
  }
  submitForm() {
        // Clear out old error messages if necessary
        this.errorMessage = '';
        this.success = false;

        this.apiService.submitDogForm(this.firstName, this.lastName, this.dog).subscribe(
            (result) => {
                // Code will run on successful API call
                console.log(result);
                this.success = true;
            }, (err) => {
                // Code will run on unsuccessful API call
                this.errorMessage = 'Error Submitting Form. Please Try Again.';
            }
        );
    }
}
