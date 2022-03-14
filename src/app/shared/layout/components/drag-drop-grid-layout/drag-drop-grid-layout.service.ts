import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';
import { GridLayoutDefinition } from '../../models/grid-layout-definition.model';

@Injectable({
  providedIn: 'root'
})
export class DragDropGridLayoutService {
  private _layoutDefinition: GridLayoutDefinition | null = null;

  private _layoutDefinitionSource: BehaviorSubject<GridLayoutDefinition | null> = 
    new BehaviorSubject<GridLayoutDefinition | null>(this._layoutDefinition);

  constructor() { }

  public onLayoutChanges(): Observable<GridLayoutDefinition | null> {
    return this._layoutDefinitionSource
      .asObservable()
      .pipe(distinctUntilChanged());
  }

  // @TODO Freeze state of layout definition
  public setLayout(layoutDefinition: GridLayoutDefinition): void {
    this._layoutDefinition = this._deepFreeze<GridLayoutDefinition>(layoutDefinition);
    this._layoutDefinitionSource.next(this._layoutDefinition);
  }

  private _deepFreeze<T>(obj: T): T {
    const propNames = Object.getOwnPropertyNames(obj);
    for (let name of propNames) {
      let value = (obj as any)[name];
      if (value && typeof value === 'object') {
        this._deepFreeze(value);
      }
    }
    return Object.freeze(obj);
  }
}
