import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fticket',
  templateUrl: './fticket.component.html',
  styleUrls: ['./fticket.component.css']
})
export class FticketComponent{

  public cities=['Banglore','Pune','Hyderabad',];
  public bangloreArea=['Vijaynagar','MG_Road',];
  public puneArea=['Nigdi','Swarget'];
  public hydArea=['Ameerpet','Sikandrabad']

  public vijaynagarM=['Super_30','Asn','Ulidavaru_Kandante',];
  public swargetM=['Commando','3idiots','F9'];
  public ameerpetM=['Singham','2.O','Rockstar']

  public selectedCity;
  public selectedArea;
  public areas=[];

  public selectedMovie;
  public movies=[];

  public selectedDate;
  public visible=true;

  public selectedSeat= 0;
  public selectedClass;

  public movie;
  public city;
  public area;
  public sclass;
  public date;
  public seat;
  public price;
  public bookClick=false;




  public selectedCityChange(){
    switch(this.selectedCity){
      case 'Banglore':
        this.areas=this.bangloreArea;
          break;
      
      case 'Pune':
        this.areas=this.puneArea;
          break;
      case 'Hyd':
        this.areas=this.hydArea;
        break;
    }
  }

    public selectedAreaChange(){
    switch(this.selectedArea){
      case 'Vijaynagar':
      this.movies=this.vijaynagarM;
        break;
      case 'MG_Road':
        this.movies=this.vijaynagarM;
        break;
  
        case 'Nigdi':
      this.movies=this.swargetM;
        break;
      case 'Swarget':
        this.movies=this.swargetM;
        break;
    
        case 'Ameerpet':
          this.movies=this.ameerpetM;
            break;
          case 'Bus_Station':
            this.movies=this.ameerpetM;
            break;
     }  
     
    } 
    public photo;
    public selectedMovieChange() {
      this.visible=false;
      
    }

    public bookTicket(){
       this.city=this.selectedCity;
       this.area=this.selectedArea;
       this.movie=this.selectedMovie;
       this.date=this.selectedDate;
       this.sclass=this.selectedClass;
       this.seat=this.selectedSeat;
       switch(this.selectedMovie){
        case 'Asn':
          this.photo='assets/movie/asn.jpg';
            break;
          case 'Super_30':
            this.photo='assets/movie/super30.jpg';
            break;
          case 'Ulidavaru_Kandante':
            this.photo='assets/movie/uk.jpg';
            break;
          case '3idiots':
            this.photo='assets/movie/idiots.jpg';
            break;
          case 'Commando':
            this.photo='assets/movie/commando.jpg';
            break;
          case 'F9':
            this.photo='assets/movie/f9.jpg';
            break;
            case 'Singham':
              this.photo='assets/movie/singham.jpg';
              break;
              case '2.O':
                this.photo='assets/movie/20.jpg';
                break;
                case 'Rockstar':
             this.photo='assets/movie/rockstar.jpg';
              break;
           }
           this.bill();
           this.bookClick=true;
    }

   public bill(){
     if(this.selectedClass=='Normal'){
       this.price= 100 * this.seat;
     }
     if(this.selectedClass=='Silver'){
       this.price= 150 * this.seat;
     }
     if(this.selectedClass=='Gold'){
       this.price=200 * this.seat;
     }
   }

    
  

}
