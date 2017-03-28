/**
 * Created by tkdrb on 2017-03-28.
 */
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");


function Create() {
    window.alert("Successfully Created!");

    var notes = $('textarea[name=mainText]').val();
    var dt = new Date();
    var date = dt.toDateString();
    $(".list").append('<div class="item">' + '<br/>' + date + '<br/>' + '<textarea>' + notes + '</textarea>' + '<br/>' +
        '<button type="button" class="button is-danger" id="removeBtn">Delete</button>' + '<button type="button" class="button is-info" id="editBtn">Edit</button>' + '</div>');
}

$(document).on('click', '#removeBtn', function() {
    $('.item').hide('fast', function() {
        $('.item').remove();
    });
});