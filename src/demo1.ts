class FooBar {
    private vId: number;
    private vName: string;
    private vDescription?: string;

    constructor(id: number, name: string, description?: string) {
        this.vId = id;
        this.vName = name;
        this.vDescription = description;
    }

    get id(): number {
        return this.vId;
    }

    get name(): string {
        return this.vName;
    }

    get description(): string {
        return this.vDescription;
    }
}

function justPrint(foobar: FooBar) {
    console.log(`id=${foobar.id}, name=${foobar.name}`);
}

justPrint(new FooBar(1, 'howdy'));
