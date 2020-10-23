import {Component} from "@angular/core";
@Component({
    selector: "app-address",
    template:`
    <div>
    <h3>{{title}}</h3>
    <address>
    Hareesh B <br>
    Athani <br> Dist:Belagavi
    </address>
    </div>`,
    styles:[`div{background-color:yellow;box-shadow:2px 4px 6px red}
    address{border:2px solid black; }`]
})

export class addressComponent{
    public title="Address";
}

