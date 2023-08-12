import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { names } from "./mock-db";

@Injectable({providedIn: 'root'})
export class UserNameController {
    registerName(name: string): Observable<boolean> {
        const date = (new Date()).getTime();
        const timeToLogout = 5*60*1000;
        const shouldRegister = names.some(userName => userName.name !== name || date - userName.lastActivityTime > timeToLogout);

        if (shouldRegister) {
            this.addUser(name);
        }

        return of(shouldRegister);
    }

    private addUser(id: string): void {
        const currentTime = (new Date()).getTime();
        const user = {
            name: id,
            lastActivityTime: currentTime,
        };

        names.push(user);
    }
}