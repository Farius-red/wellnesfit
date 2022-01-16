import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { UsuariosAction } from './usuarios.actions';

export class UsuariosStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<UsuariosStateModel>({
  name: 'usuarios',
  defaults
})
@Injectable()
export class UsuariosState {
  @Action(UsuariosAction)
  add({ getState, setState }: StateContext<UsuariosStateModel>, { payload }: UsuariosAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
