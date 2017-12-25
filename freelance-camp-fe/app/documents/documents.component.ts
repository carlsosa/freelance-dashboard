import { Component } from "@angular/core";
import { Document } from './document'
@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
    pageTitle: string = ' Document Dashboard'
    documents: Document [] = [
        {
            title: "My first Doc",
            description: " My doc about it",
            file_url: "http://gooogle.com",
            updated_at: '11/11/16',
            image_url: 'http://google.com'
        },
        {
            title: "My second Doc",
            description: " My doc about it",
            file_url: "http://gooogle.com",
            updated_at: '11/11/16',
            image_url: 'http://google.com'
        },
        {
            title: "My last Doc",
            description: " My doc about it",
            file_url: "http://gooogle.com",
            updated_at: '11/11/16',
            image_url: 'http://google.com'
        }
    ]
}