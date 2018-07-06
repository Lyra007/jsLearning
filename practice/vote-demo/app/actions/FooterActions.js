import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    $.ajax({url: '/api/characters/top'})
    .done((data) => {
      this.actions.getTopCharactersSuccess(data)
    })
    .fail((jgXhr) => {
      this.actions.getTopCharactersFail(jgXhr)
    });
  }
}

export default alt.createActions(FooterActions);
