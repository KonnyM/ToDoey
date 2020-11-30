let toDoList = [{description: "Gå ut med hunden", finished: false}, {description: "Åka och handla", finished: true}, {description: "Laga middag", finished: false}];
let historyOfActivities = [];

function displayList() {
    for (let todo of toDoList) {
            $(".list").append(`<p ${todo.finished ? "class=modify" : ""}> <span class="check" style="color: white">&check;</span> <span class="text" title="toggle check status">${todo.description}</span> <span class="cross" style="color: rgba(0, 0, 0, 0.363)">&Cross;</span>
            </p>`);
    }
}


$(".add").click(function() {
    event.preventDefault();
    
    if (($(".inputText").val().trim() != "")) {
        toDoList.push({
            description: $(".inputText").val().replaceAll(" ", "&nbsp;"),
            finished: false
        });
        historyOfActivities.push({
            description: $(".inputText").val().replaceAll(" ", "&nbsp;"),
            finished: false
        });
        $(".inputText").val("");
        clearDisplayList();
        displayList();
    }

});

$(".list").on("click", ".cross", function() {
    event.preventDefault();
    toDoList.splice($(this).parent().index(), 1);
    clearDisplayList();
    displayList();
});

$(".list").on("click", ".text", function() {
    event.preventDefault();
    $(this).parent().attr("class", "modify");
    toDoList[$(this).parent().index()].finished = true;
});

function clearDisplayList() {
    $("p").remove();
}