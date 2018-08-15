import { Binder } from './binder';
import { Selector } from './selector';
import { Parser } from './parser';
import { Observable } from './observable';

export class MVVM {
    constructor() { }
    public bindToView(viewModel: any) {
        const toBind = Selector.selectElements();
        for (const elem of toBind) {
            const bindingAttribute = Selector.getBinding(elem);
            const bindingModel = Parser.parse(bindingAttribute);
            const binder = new Binder();
            binder.bind(viewModel, elem, bindingModel);
        }
    }
    public static observable(name: string): Observable {
        return new Observable(name);
     }
}
