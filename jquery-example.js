
       $('.test-button').click(function(e){
                  var path =  'http://localhost/deneme/public/';
                  let query = 'test';

                  if($('#test1 option').is(":selected")){
                      query += $('[id="test1"]').val() ?  (query.includes('?') ? '&' : '?') +'test1=' +  $('[id="test1"]').val() :'';
                  }
          
                  if($('#test2 option').is(":selected")){
                      query += $('[id="test2"]').val() ?  (query.includes('?') ? '&' : '?') +'test2=' +  $('[id="test2"]').val() :'';
                  }

                  if($('#test3 option').is(":selected")){
                      query += $('[id="test3"]').val() ?  (query.includes('?') ? '&' : '?') +'test3=' +  $('[id="test3"]').val() :'';
                  }

                  if($('#test4 option').is(":selected")){
                      query += $('[id="test4"]').val() ?  (query.includes('?') ? '&' : '?') +'test4=' +  $('[id="test4"]').val() :'';
                  }
                  
                  if($('#test5 option').is(":selected")){
                      query += $('[id="test5"]').val() ?  (query.includes('?') ? '&' : '?') +'test5=' +  $('[id="test5"]').val() :'';
                  }
                  return window.location.href =  path  + query;
          });
          
          
          $('.reset').click(function(e){
                    $("#test1").prop("selectedIndex", 0);
                    $("#test2").prop("selectedIndex", 0);
                    $("#test3").prop("selectedIndex", 0);
                    $("#test4").prop("selectedIndex", 0);
                    $("#test5").prop("selectedIndex", 0);
                    window.history.replaceState({}, document.title, window.location.pathname);

          });  


          $("#registerForm").on("submit", function (e) {
          e.preventDefault();
               $.ajax({
                      url: "http://localhost/test/public/test-user",
                      type: "POST",
                      data:$(this).serialize(),
                            success: function (response) {
                                  if(response.success){
                                     window.location.href= "http://localhost/test/public/index"
                                  }
                            },
                            error(error) {
                                $(".errors").html(error.errors.messages.join("</br>"));      
                                $(".alert-box").show();          
                            },
                    });

               })





