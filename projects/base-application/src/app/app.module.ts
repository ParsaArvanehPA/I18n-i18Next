import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BaseHomePageComponent} from './view/base-home-page/base-home-page.component';
import {I18NEXT_NAMESPACE_RESOLVER, I18NEXT_SERVICE, I18NextModule} from 'angular-i18next';
import {localIdFactory} from './shared/utils/local-id.factory';
import {I18nextInitializerFactory} from './shared/utils/i18next-initializer.factory';

const routes: Routes = [
    {
        path: 'base-application',
        component: AppComponent,
        children: [
            {
                path: 'home-page',
                component: BaseHomePageComponent,
            },
        ],
    },
    {
        path: 'iap-application',
        loadChildren: () => import('../../../iap-application/src/app/iap-app.module').then((m) => m.IapAppModule),
        data: {
            i18nextNamespaces: ['./assets/iap-application/i18n/fa/fa.json'],
        },
        resolve: {
            i18next: I18NEXT_NAMESPACE_RESOLVER,
        },
    },
];

@NgModule({
    declarations: [AppComponent, BaseHomePageComponent],
    imports: [BrowserModule, RouterModule, RouterModule.forRoot(routes), I18NextModule.forRoot()],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: I18nextInitializerFactory,
            deps: [I18NEXT_SERVICE],
            multi: true,
        },
        {
            provide: LOCALE_ID,
            deps: [I18NEXT_SERVICE],
            useFactory: localIdFactory,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
