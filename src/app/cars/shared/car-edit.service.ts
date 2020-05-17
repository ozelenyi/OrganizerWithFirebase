import { Injectable } from "@angular/core";

import { Note } from "./car.model";
import { CarService } from "./car.service";

@Injectable({
    providedIn: "root"
})
export class CarEditService {
    private _editModel: Note;

    constructor(private _carService: CarService) {}

    startEdit(id: string): Note {
        this._editModel = null;

        return this.getEditableCarById(id);
    }

    getEditableCarById(id: string): Note {
        if (!this._editModel || this._editModel.id !== id) {
            const car = this._carService.getCarById(id);

            // get fresh editable copy of car model
            this._editModel = new Note(car);
        }

        return this._editModel;
    }
}
