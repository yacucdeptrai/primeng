import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SliderAlt } from './slideralt';

describe('SliderAlt', () => {
    let slideralt: SliderAlt;
    let fixture: ComponentFixture<SliderAlt>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, SliderAlt]
        });

        fixture = TestBed.createComponent(SliderAlt);
        slideralt = fixture.componentInstance;
    });

    it('should create by default', () => {
        fixture.detectChanges();

        const slideraltEl = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(slideraltEl).toBeTruthy();
        expect(slideraltEl.className).toContain('p-slider');
    });

    it('should disabled', () => {
        slideralt.disabled = true;
        fixture.detectChanges();

        const slideraltEl = fixture.debugElement.query(By.css('div')).nativeElement;
        const clickSpy = spyOn(slideralt, 'updateDomData').and.callThrough();
        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(slideraltEl.className).toContain('p-disabled');
        expect(clickSpy).not.toHaveBeenCalled();
        expect(slideralt.dragging).not.toEqual(true);
    });

    it('should change styles', () => {
        slideralt.style = { height: '300px' };
        slideralt.styleClass = 'Primeng ROCKS!';
        fixture.detectChanges();

        const slideraltEl = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(slideraltEl.className).toContain('Primeng ROCKS!');
        expect(slideraltEl.style.height).toEqual('300px');
    });

    it('should change orientation', () => {
        slideralt.orientation = 'vertical';
        fixture.detectChanges();

        const slideraltEl = fixture.debugElement.query(By.css('div')).nativeElement;
        expect(slideraltEl.className).toContain('p-slider-vertical');
    });

    it('should set min', () => {
        slideralt.min = 20;
        fixture.detectChanges();

        slideralt.updateValue(19);
        fixture.detectChanges();

        slideralt.cd.detectChanges();
        const spanEl = fixture.debugElement.query(By.css('span')).nativeElement;
        expect(slideralt.handleValue).toEqual(0);
        expect(spanEl.style.width).toEqual('0%');
    });

    it('should set max', () => {
        slideralt.max = 90;
        fixture.detectChanges();

        slideralt.updateValue(91);
        fixture.detectChanges();

        slideralt.cd.detectChanges();
        const spanEl = fixture.debugElement.query(By.css('span')).nativeElement;
        expect(slideralt.handleValue).toEqual(100);
        expect(spanEl.style.width).toEqual('100%');
    });

    it('should listen onChange', () => {
        fixture.detectChanges();

        let value = 1;
        slideralt.onChange.subscribe((data) => (value = data.value));
        slideralt.updateValue(91);
        fixture.detectChanges();

        expect(value).toEqual(91);
    });

    it('should change value with touch events (horizontal)', () => {
        fixture.detectChanges();

        slideralt.updateValue(91);
        slideralt.handleValue = 91;
        fixture.detectChanges();

        const touchstartEvent: any = document.createEvent('CustomEvent');
        touchstartEvent.changedTouches = [{ clientX: 450 }];
        touchstartEvent.initEvent('touchstart', true, true);
        const touchmoveEvent: any = document.createEvent('CustomEvent');
        touchmoveEvent.changedTouches = [{ clientX: 400 }];
        touchmoveEvent.initEvent('touchmove', true, true);
        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(touchstartEvent);
        fixture.detectChanges();

        spanEl.nativeElement.dispatchEvent(touchmoveEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeLessThan(91);
    });

    it('should change value with touch events (vertical)', () => {
        fixture.detectChanges();

        slideralt.orientation = 'vertical';
        slideralt.updateValue(91);
        slideralt.handleValue = 91;
        fixture.detectChanges();

        const touchstartEvent: any = document.createEvent('CustomEvent');
        touchstartEvent.changedTouches = [{ clientY: 400 }];
        touchstartEvent.initEvent('touchstart', true, true);
        const touchmoveEvent: any = document.createEvent('CustomEvent');
        touchmoveEvent.changedTouches = [{ clientY: 450 }];
        touchmoveEvent.initEvent('touchmove', true, true);
        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(touchstartEvent);
        fixture.detectChanges();

        spanEl.nativeElement.dispatchEvent(touchmoveEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeLessThan(91);
    });

    it('should change value with mouse events (horizontal)', () => {
        fixture.detectChanges();

        const bindDragListenersSpy = spyOn(slideralt, 'bindDragListeners').and.callThrough();
        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(bindDragListenersSpy).toHaveBeenCalled();
        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageX = 300;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        const unbindDragListenersSpy = spyOn(slideralt, 'unbindDragListeners').and.callThrough();
        slideralt.ngOnDestroy();
        fixture.detectChanges();

        expect(unbindDragListenersSpy).toHaveBeenCalled();
    });

    it('should change value with mouse events (vertical)', () => {
        slideralt.orientation = 'vertical';
        fixture.detectChanges();

        const bindDragListenersSpy = spyOn(slideralt, 'bindDragListeners').and.callThrough();
        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(bindDragListenersSpy).toHaveBeenCalled();
        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageY = 115;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        const unbindDragListenersSpy = spyOn(slideralt, 'unbindDragListeners').and.callThrough();
        slideralt.ngOnDestroy();
        fixture.detectChanges();

        expect(unbindDragListenersSpy).toHaveBeenCalled();
    });

    it('should increment value with step', () => {
        slideralt.value = 0;
        slideralt.step = 2;
        fixture.detectChanges();

        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageX = 300;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0);
        expect(slideralt.value % 2).toEqual(0);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        slideralt.ngOnDestroy();
        fixture.detectChanges();
    });

    it('should increment value with decimal step and decimal max', () => {
        slideralt.value = 0.02;
        slideralt.step = 0.01;
        slideralt.max = 2.5;
        fixture.detectChanges();

        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageX = 300;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0.02);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        slideralt.ngOnDestroy();
        fixture.detectChanges();
    });

    it('should decrement value with step', () => {
        slideralt.value = 90;
        slideralt.step = 2;
        fixture.detectChanges();

        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageX = 300;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0);
        expect(slideralt.value % 2).toEqual(0);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        slideralt.ngOnDestroy();
        fixture.detectChanges();
    });

    it('should decrement value with decimal step and decimal max', () => {
        slideralt.value = 2.4;
        slideralt.step = 0.01;
        slideralt.max = 2.5;
        fixture.detectChanges();

        const spanEl = fixture.debugElement.query(By.css('.p-slider-handle'));
        spanEl.nativeElement.dispatchEvent(new Event('mousedown'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(true);
        const mousemoveEvent: any = document.createEvent('CustomEvent');
        mousemoveEvent.pageX = 300;
        mousemoveEvent.initEvent('mousemove', true, true);
        document.dispatchEvent(mousemoveEvent);
        document.dispatchEvent(mousemoveEvent as MouseEvent);
        fixture.detectChanges();

        expect(slideralt.value).toBeGreaterThan(0);
        expect(slideralt.value).toBeLessThan(2.4);
        document.dispatchEvent(new Event('mouseup'));
        fixture.detectChanges();

        expect(slideralt.dragging).toEqual(false);
        slideralt.ngOnDestroy();
        fixture.detectChanges();
    });

    it('should normalize handle value on writeValue', () => {
        fixture.detectChanges();

        slideralt.writeValue(50);
        fixture.detectChanges();

        expect(slideralt.value).toEqual(50);
        expect(slideralt.handleValue).toEqual(50);
    });

    it('should keydown spin the value up and down', () => {
        slideralt.value = 50;
        slideralt.step = 5;
        fixture.detectChanges();

        const handle = fixture.debugElement.query(By.css('.p-slider-handle'));
        handle.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 } as any));
        expect(slideralt.value).toBeGreaterThanOrEqual(50);

        handle.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 } as any));
        fixture.detectChanges();
        expect(slideralt.value).toBeLessThanOrEqual(55);
    });
});
