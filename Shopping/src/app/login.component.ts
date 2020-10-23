import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <div>
    <h2>Login</h2>
    <form action="" class="form">
        <dl>
            <dt>Username:</dt>
            <dd><input type="text" id="uname" class="form-control"></dd>
            <br>
            <dt>Password:</dt>
            <dd><input type="password" id="upass" class="form-control"></dd>
            <br>
        </dl>
        <dl>
            <dd><button class="btn btn-success">Submit</button></dd>
        </dl>
    </form>
    </div>
    `,
    styles: [`div{
        border: 1px solid black;
        margin: 20ox;
        padding: 20px;
        width: 250px;
        height: 300px;
        box-shadow: 10px 10px 5px gray;
    }
    button{
        margin: 5px;
        padding: 5px;
        background-color: green;
        color: white;
    }`],
})

export class loginComponent{
    public title= "Login";
}
