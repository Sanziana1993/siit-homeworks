const url = 'https://games-world.herokuapp.com/games';

(async function() {
   
    const games = await fetch(url) 
                    .then(res => res.json())
                    .catch(err => console.warn('The url is not correct', err))
    displayGames(games);
    attachEventListeners();
   
})();
function displayGames(games){
    const fragment = document.createDocumentFragment();

    for(const game of games){
        const gameHtml = createHtml(game);
        fragment.append(gameHtml);
    }
    document.body.append(fragment);
}

function createHtml(game){
    const wrapper = document.createElement('section')

    const title = document.createElement('h2');
    title.innerHTML = game.title ;

    const img = document.createElement('img');
    img.src = game.imageUrl;
            
    const description = document.createElement('div');
    description.innerHTML = game.description;

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit Game';
    editBtn.classList.add('js-edit-button');
    editBtn.setAttribute('data-game-id', game.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList.add('js-delete-button');
    deleteBtn.setAttribute('data-game-id', game.id);

    wrapper.append(title, img, description, editBtn, deleteBtn);

    return wrapper      
  
}



function attachEventListeners() {
    
    document.addEventListener('click', handleClick);

    function handleClick(e) {
       
        const gameId = e.target.getAttribute('data-game-id');
        
        if(e.target.classList.contains('js-edit-button')) {
            handleEdit(gameId);
        } else if(e.target.classList.contains('js-delete-button')) {
            handleDelete(gameId);
        }
    }
}

function handleEdit(id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'title=Test Joc & description = Super Joc'
    })
    .then(res => res.json())
    .then(console.log)
}

function handleDelete(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(console.log);

}  
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
    
