class GameDetailsView{
    constructor(){
        const model = new gameModel();

        const queryParams = location.search.split('&');
        const gameId = queryParams
            .find(param => param.includes('gameId='))
            .split('=')[1];

        this.game = model.findById(gameId);
    }
    async displayGame() {
        const article = document.querySelector('.js-game-details');
        article.append(await this.createHtml());
    }
    async createHtml(){
        const game = await this.game
                        
         const title = document.createElement('h2');
         title.innerHTML = game.title ;

         const body = document.createElement('section');
         body.append(title);
            
         const img = document.createElement('img');
         img.src = game.imageUrl;
         body.append(img);
                        
         const description = document.createElement('p');
         description.innerHTML = game.description;
         body.append(description);
        

                
           const editBtn = document.createElement('button');
           editBtn.innerHTML = 'Edit Game';
           editBtn.classList.add('js-edit-button');
           editBtn.setAttribute('data-game-id', game._id);
           body.append(editBtn)
            
           const deleteBtn = document.createElement('button');
           deleteBtn.innerHTML = 'Delete Game';
           deleteBtn.classList.add('js-delete-button');
           deleteBtn.setAttribute('data-game-id', game._id);
           body.append(deleteBtn)
            
       
               return body ;
    }
    async attachEventListeners() {
    
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
    
    async handleEdit(id) {
        fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'title=Test Joc & description = Super Joc'
        })
        .then(res => res.json())
      
    }
    
    async handleDelete(id) {
        fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
     
    
    }  
    
}
  

const view = new GameDetailsView();
view.displayGame();



   
    