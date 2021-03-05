import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IChangeFacility } from './models/settings.model';

const facList: IChangeFacility[] = [
  { facilityId: 0, defaultFac: true, name: 'Teknopark', notify: 3 },
  { facilityId: 1, defaultFac: false, name: 'MaxxRoyal Belek', notify: null },
  { facilityId: 2, defaultFac: false, name: 'Senyonet Demo', notify: 2 },
  { facilityId: 3, defaultFac: false, name: 'Tekfen Tower', notify: 1452 }
];

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  constructor() { }

  getFacList$(): Observable<IChangeFacility[]> {
    return of(facList);
  }

  getUpdateList(id: number): Observable<IChangeFacility[]> {
    let data = (facList);
    const index = data.findIndex(x => x.facilityId === id);
    data = data.splice(index, 1);
    return of(data);
  }
}
