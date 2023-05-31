import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent  implements OnInit{
  ID =0;
  user:any;
  UserAlbums:any = [];
 
  constructor(private service:MyServiceService,private route:ActivatedRoute){
    this.ID = route.snapshot.params["id"];
  }

  //Get the selected user
  //Get all albums filter to get the albums of the selected user
  ngOnInit(): void {
    this.service.GetUser(this.ID).subscribe({
      next: (userData)=>{this.user=userData; MyServiceService.user = this.user },
      error: (error)=> {console.log("Error in Details "+error)}
    })

    this.service.GetAllAlbums().subscribe({
      next:(Allalbums:any)=>{
        this.UserAlbums = Allalbums.filter((album:any) => album.userId == this.ID);
        
      }
    })
  }

   
}
