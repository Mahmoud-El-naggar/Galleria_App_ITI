import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styles: [
  ]
})
export class PhotosComponent  implements OnInit{
  albumId = 0;
  UserPhotos:any;
  user: any;
  constructor(private route: ActivatedRoute, private service: MyServiceService) {
     this.albumId = route.snapshot.params["id"];
  }


  //Get All photos, filter to display the photos of the selected album
  ngOnInit(): void {
    this.service.GetAllPhotos().subscribe({
      next: (photos:any) => {
       this.UserPhotos =  photos.filter((photo:any) => photo.albumId == this.albumId)
       this.user = MyServiceService.user;
      }
    })
  }

}
