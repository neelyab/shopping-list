$(function() {
    //adds items to list
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
      $("#js-shopping-list-form")[0].reset();

    })
    //removes items from the list 
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();

    });
    // checks and unchecks items
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");

    });

})