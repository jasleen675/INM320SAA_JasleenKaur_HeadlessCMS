async function getRecords() {
    const fetchedData = await fetch('../data/data.json');
    const result = await fetchedData.json();
    
    // Cards Section  ======>info card 1

    const cardsHolder = document.querySelectorAll('.cardhighlight');  

    result.cards.forEach((item, index) => {

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        cardBody.innerHTML = `
            <p class="card-text">${item.cardslabel}</p>
            <h5 class="card-title">${item.cardsvalue}</h5>
        `;

        if (cardsHolder[index]) {
            cardsHolder[index].appendChild(cardBody);   //used index for correct placement for arrays
        }
    });

    // Graph section  =======> info card 2

    const graphHolder = document.querySelector('.list-group-flush'); 

    result.graphStats.forEach(stat => {
      
        let stats = document.createElement('li');
        stats.classList.add('list-group-item'); 

        stats.innerHTML = `
            <p class="card-text">${stat.graphlabel}</p>
            <h5 class="card-title">${stat.graphvalue}</h5>
        `;
        graphHolder.appendChild(stats);
    });

    // Tickets section  =======> info card 3

    const cardHeader = document.querySelector('.card-header');
    const headerContent = `
        <div>
            <h5>${result.header.title}</h5>
            <p>Group: <span>${result.header.group}</span></p>
        </div>
        <a href="${result.header.linkURL}" class="view-more">${result.header.linkText}</a>
    `;
    cardHeader.innerHTML = headerContent;


    const ticketList = document.querySelector('#tickets'); 

    result.tickets.forEach(ticket => {
    
        let ticketItem = document.createElement('li');
        ticketItem.classList.add('list-group-item'); 

    
        ticketItem.innerHTML = `
            <h5 class="ticket-name">${ticket.name}</h5>
            <p class="ticket-num">${ticket.number}</p>
         `;

        ticketList.appendChild(ticketItem);
    });

    // Tasks section  =======> info card 4

    const taskHeader = document.querySelector('#taskheader');
    const taskList = document.querySelector('#tasksul');

    const taskContent = `
        <div>
            <h5>${result.headertasks.title}</h5>
            <p>${result.headertasks.description}</p>
        </div>
        <a href="${result.headertasks.linkURL}" class="view-more">${result.headertasks.linkText}</a>
    `;
    taskHeader.innerHTML = taskContent;

    result.tasks.forEach(task => {

        let taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item'); 

  
        taskItem.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                label class="form-check-label" for="flexCheckDefault">
                    ${tasks.name}
                </label>
            </div>
            <span class="badge text-bg-success text-white">${tasks.badge}</span>
        `;
    
 
        taskList.appendChild(taskItem);
  });


    
}

getRecords();
