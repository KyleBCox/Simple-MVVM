import { DOMConstants } from './../constants/dom-constants';
export class BindingModel {
    constructor(private name: string, public keyword: string) { }
    public initExpression = (self: object,  element: any): void => {
        element.setAttribute(DOMConstants.boundNameAttribute, this.name);
    };
    public setExpression: (self: object, element: Element) => any;
    public getExpression: (self: object, element: Element) => any;
    
};