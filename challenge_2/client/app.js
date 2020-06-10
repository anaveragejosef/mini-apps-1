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
  $.ajax({
    url: 'http://localhost:3000/',
    type: 'GET',
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(error);
    }
  });
}

// formmethod='post' formaction='http://localhost:3000/'