import {ITranslationService} from 'angular-i18next';

export function localIdFactory(i18next: ITranslationService) {
    return i18next.language;
}
