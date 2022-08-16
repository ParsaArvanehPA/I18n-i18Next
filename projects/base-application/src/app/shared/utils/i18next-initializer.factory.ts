import {ITranslationService} from 'angular-i18next';
import Backend from 'i18next-http-backend';

export function I18nextInitializerFactory(i18next: ITranslationService) {
    return () =>
        i18next.use(Backend).init({
            fallbackLng: 'en',
            debug: true,
            returnEmptyString: false,
            // ns: ['./assets/base-application/i18n/fa/fa.json'],
            backend: {
                loadPath: './assets/base-application/i18n/fa/fa.json',
            },
        });
}
