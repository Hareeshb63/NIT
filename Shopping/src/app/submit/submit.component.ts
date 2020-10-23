import { Component} from '@angular/core';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {

  public onClick(){
    alert('Registered')
  }

    constructor(private capt: CaptchaService){}
    public code = this.capt.Gereratecode();

    public refreshVerify(){
      this.code= this.capt.Gereratecode();
    }
}

