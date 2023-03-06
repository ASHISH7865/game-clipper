import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  private _modals: IModal[] = [];

  register(id: string) {
    this._modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this._modals = this._modals.filter((x) => x.id !== id);
  }

  isModelOpen(id: string): boolean {
    return !!this._modals.find((x) => x.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this._modals.find((x) => x.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
