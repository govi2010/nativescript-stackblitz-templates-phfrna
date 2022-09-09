import { Observable, ObservableArray } from '@nativescript/core';

export type Selectable<T> = T & {
  checked: boolean;
};

export enum AccountScope {
  account = 'account',
  prospect = 'prospect',
  document = 'document',
}

export enum LocationType {
  account = 'account',
  custom = 'custom',
  start = 'start',
  end = 'end',
}

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface AccountLocation extends GeoPoint {
  type: string;
  id: string;
  name: string;
  address: string;
  scope?: string;
}

export interface CustomLocation extends GeoPoint {
  type: string;
  id: string;
  name: string;
  address: string;
}

export type RouteLocation = AccountLocation | CustomLocation;

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor() {
    super();

    // Initialize default values.
    this._counter = 42;
    this.updateMessage();
  }
  private _data: Selectable<RouteLocation>[];
  get data(): ObservableArray<Selectable<RouteLocation>> {
    return new ObservableArray(this._data);
  }

  populateData(): void {
    this._data = data;
  }
  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value);
    }
  }

  onTap() {
    this._counter--;
    this.updateMessage();
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message =
        'Hoorraaay! You unlocked the NativeScript clicker achievement!';
    } else {
      this.message = `${this._counter} taps left`;
    }

    // log the message to the console
    console.log(this.message);
  }

  templateSelectorFunc(item: Selectable<RouteLocation>) {
    if (item['type'] === LocationType.start) {
      return 'start';
    }
    if (item['type'] === LocationType.end) {
      return 'end';
    }
    return 'regular';
  }

  onSearch(args: any) {
    const text = args.object.text || '';
    // this.store.setSearch(text);
    // if (this.listElement) {
    //   this.listElement.listView.refresh();
    // }
  }

  checkUncheck(id, checked: boolean, type: LocationType) {
    // this.store.checkUnCheckLocation({ id, checked });
  }
  log(id, checked: boolean, type: LocationType) {
    // if (this.listElement) {
    //   this.listElement.listView.refresh();
    // }
  }
}
