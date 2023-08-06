import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiService/jsonplaceholder.servicio';

@Component({
  selector: 'app-services',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  posts:any = [];
  
  constructor(private jsonplaceholderService: JsonplaceholderService){
    this.jsonplaceholderService.allPost().subscribe(data => {
      // console.log('All Posts:', data);
      this.posts = data;
    });
  }
}
