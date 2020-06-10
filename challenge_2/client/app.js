$('#submit').click(function(event) {
  event.preventDefault();
  var form = $('.json-form')[0];
  var data = new FormData(form);
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'POST',
    enctype: 'multipart/form-data',
    data: data,
    processData: false,
    contentType: false,
    success: function(data) {
      document.getElementById('output').append(data);
    },
    error: function(error) {
      document.getElementById('output').append(error);
    }
  });
});

var getFile = () => {
  $.get( "/", function( data ) {
    alert( "Data Loaded: " + data );
  });
}

// formmethod='post' formaction='http://localhost:3000/'