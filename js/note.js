/**
 * Created by tkdrb on 2017-03-28.
 */
function Create() {
    window.alert("Successfully Created!");

    var notes = $('textarea[name=mainText]').val();
    var dt = new Date();
    var date = dt.toDateString();
    $('.list').show('slow', function () {
        $('.list').append('<div class="item">' + '<br/>' + date + '<br/>' + '<textarea>' + notes + '</textarea>' + '<br/>' +
            '<button type="button" class="btn btn-danger" id="removeBtn">Delete</button>' + '<button type="button" class="btn btn-warning" id="editBtn">Edit</button>' + '</div>');
    });
    document.getElementById("mainText").value = "";
}

$(document).on('click', '#editBtn', function() {
    window.alert("Successfully Edited!");

});

$(document).on('click', '#removeBtn', function() {
    $('.item').hide('fast', function() {
        $('.item').remove();
    });
});
