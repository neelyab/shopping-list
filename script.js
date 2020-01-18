$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const shoppingItem= $(event.currentTarget).find('#shopping-list-entry').val();
        $('.shopping-list').append($(`<li>
        <span class="shopping-item"> ${shoppingItem} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
           <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
           <span class="button-label">delete</span>
          </button>
        </div>
      </li>`));

    })
    $('#')

})