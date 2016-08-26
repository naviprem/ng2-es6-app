/**
 * Created by premkrishna on 8/21/16.
 */
import { TestBed } from "@angular/core/testing";
import  AppComponent  from './app.component';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent]});
    });
    it('true is true', () => expect(true).toEqual(true));
    it('null is not the same thing as undefined',
        () => expect(null).not.toEqual(undefined)
    );
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });

    //Test the add function in app.component.js
    it ('should add', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance.add(1,2)).toBe(3);
    });
});