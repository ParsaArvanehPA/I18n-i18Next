import {Component} from '@angular/core';
import {ITranslationService} from 'angular-i18next';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'base-application';
    // constructor(private i18next: ITranslationService) {
    //     console.log(i18next.t('Hello'));
    // }
}
