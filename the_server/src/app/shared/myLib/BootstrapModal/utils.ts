/**
 * Created by bahgat.mashaly on 10/6/16.
 */
export class PromiseCompleter<R> {
    promise: Promise<R>;
    resolve: (value?: R|PromiseLike<R>) => void;
    reject: (error?: any, stackTrace?: string) => void;

    constructor() {
        this.promise = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
}