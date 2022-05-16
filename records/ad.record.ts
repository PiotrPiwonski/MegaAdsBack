import {AdEntity} from "../types";
import {ValidationError} from "../utils/errors";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export class AdRecord implements AdEntity {
    description: string;
    id: string;
    lat: number;
    lon: number;
    name: string;
    price: number;
    url: string;

    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa ogłoszenia nie może być pusta, ani przekraczać 100 znaków.');
        }

        if (obj.description.length > 1000) {
            throw new ValidationError('Treść ogłoszenia nie może przekraczać 1000 znaków.');
        }

        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError('Cena nie może być mniejsza niż 0 lub większa niż 9 999 999.');
        }

        // @TODO: Chekc if URL is valid!
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Link ogłoszenia nie może być pusty, ani przekraczać 100 znaków.');
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia.');
        }

        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }

}