// tslint:disable:no-any function-name variable-name typedef

// Type which construct objects of the generic type T
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin function
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        public timestamp = Date.now();
    };
}

class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Create a new class by mixing "Timestamped" into "User"
const TimestampedUser = Timestamped(User);

const user = new TimestampedUser('John Doe');

console.log(`name=${user.name}, timestamp=${user.timestamp}`);
