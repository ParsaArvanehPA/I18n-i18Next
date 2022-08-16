import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-iap-home-page',
    templateUrl: './iap-home-page.component.html',
    styleUrls: ['./iap-home-page.component.scss'],
})
export class IapHomePageComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({i18next}) => {
            console.log('THIS ==> ', i18next);
        });
    }
}
