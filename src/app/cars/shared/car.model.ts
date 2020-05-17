export class Note {
    id: string;
    title: string;
    text: string;
    createDate: string;

    constructor(options: any) {
        this.id = options.id;
        this.title = options.title;
        this.text = options.text;
        this.createDate = options.createDate;
    }
}
