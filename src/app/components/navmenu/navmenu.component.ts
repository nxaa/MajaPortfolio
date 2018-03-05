import { Component } from '@angular/core';
import * as $ from "jquery";


@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    public homeLikClick() {
        var myElement = $('#homeLink');
        console.log(myElement);
    }

    public aboutLikClick() {
        var myElement = $('#aboutLink');
        console.log(myElement);
    }

    public galleryLikClick() {
        var myElement = $('#galleryLink');
        console.log(myElement);
    }

    public contactLikClick() {
        var myElement = $('#contactLink');
        console.log(myElement);
    }
}
