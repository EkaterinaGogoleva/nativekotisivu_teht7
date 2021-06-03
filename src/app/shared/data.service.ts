import { Injectable } from '@angular/core'

export interface DataItem {
  id: number
  name: string
  description: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      name: 'JAMK oppilas',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      name: 'Asuu Taavetissa',
      description: 'Description for Item 2',
    },
    {
      id: 3,
      name: 'Tykkää ottaa aurinkoa',
      description: 'Description for Item 3',
    },
    {
      id: 4,
      name: 'Lempiruoka on kakku',
      description: 'Description for Item 4',
    }
  )

  getItems(): Array<DataItem> {
    return this.items
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0]
  }
}
