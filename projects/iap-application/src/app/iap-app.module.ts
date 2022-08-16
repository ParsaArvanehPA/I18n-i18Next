import {Inject, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {IapHomePageComponent} from './view/iap-home-page/iap-home-page.component';
import {I18NEXT_NAMESPACE_RESOLVER, I18NEXT_SERVICE, I18NextModule, ITranslationService} from 'angular-i18next';
import Backend from 'i18next-http-backend';
import {localIdFactory} from '../../../base-application/src/app/shared/utils/local-id.factory';
import i18next from 'i18next';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'home-page',
                component: IapHomePageComponent,
            },
        ],
        data: {
            i18nextNamespaces: ['./assets/iap-application/i18n/fa/fa.json'],
        },
        resolve: {
            i18next: I18NEXT_NAMESPACE_RESOLVER,
        },
    },
];

@NgModule({
    declarations: [AppComponent, IapHomePageComponent],
    imports: [BrowserModule, RouterModule, RouterModule.forChild(routes), I18NextModule.forRoot()],
    providers: [
        {
            provide: LOCALE_ID,
            deps: [I18NEXT_SERVICE],
            useFactory: localIdFactory,
        },
    ],
    bootstrap: [AppComponent],
})
export class IapAppModule {
    public constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService) {
        i18next
            .use(Backend)
            .init({
                fallbackLng: 'en',
                debug: true,
                returnEmptyString: false,
                backend: {
                    loadPath: './assets/iap-application/i18n/fa/fa.json',
                },
            })
            .then();
    }
}
