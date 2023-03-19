import { Component } from '@angular/core';

@Component({
    selector: 'app-board',
    template: `
    <div>
        <app-square [black]="true">
            <app-knight></app-knight>
        </app-square>
    </div>
    `
})
export class BoardComponent {
}
