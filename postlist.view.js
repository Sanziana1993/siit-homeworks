
class GameListView{
  
    constructor(){
        const model = new gameModel();
        this.games = model.getAll();

    }
    async createGameList() {
        const fragment = document.createDocumentFragment();

        for(const game of await this.games) {
            const gameHtml = this.createGameHtml(game);
            fragment.append(gameHtml);
        }
        document.querySelector('.js-game-list').append(fragment);
    }
    createGameHtml(game) {
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.innerHTML = game.title;
        a.href = 'postDetails.html?gameId='+ game._id;

        p.append(a);

        return p;
    }
}
const view = new GameListView();

view.createGameList();

function createGame(game) {
    axios(`https://games-world.herokuapp.com/games`, {
        method: 'POST',
        data:'title = Call of Duty®: WWII Returned && imageUrl = https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$',
        headers: {
           'Content-Type' :  'application/x-www-form-urlencoded'
        }
    });
}

document.querySelector('[data-andGame]').addEventListener('click', createGame)