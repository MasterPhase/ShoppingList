var currentList = {};

function createShoppingList()
{
    currentList.name = $("#shoppingListName").val();
    currentList.items = new Array();

    $("#shoppingListTitle").html(currentList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
}

function addItem()
{
    var newItem = {};
    newItem.name = $("#newItemName").val();
    currentList.items.push(newItem);
    console.info(currentList);

    drawItem();
    $("#newItemName").val("");
}

function drawItem()
{
    var $list = $("#shoppingListItems").empty();

    for (var i = 0; i < currentList.items.length; i++)
        {
        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name).attr("id", "item_" + i);
        var $deleteBtn = $("<button onlick='deleteItem(" + i + ")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onlick='checkItem(" + i + ")'>C</button>").appendTo($li);

        $li.appendTo($list);

        }
}


$(document).ready(function ()
{
    console.info("ready");
});