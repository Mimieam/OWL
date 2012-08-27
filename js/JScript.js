
OpenForm = (function() {
	var urlForm = $(".formAddToWallet");
    if(urlForm.css('display') == 'none') {
        urlForm.show('500');
    } else {
         urlForm.hide('slow');
		//  urlForm.show('500');
       // alert("TRYING TO HIDE HERE");
    }
});


$(document).ready(function() {

	$("#input_form").validate();
	var sidePageType = $(".sidePagesType");
    $("li").hover(function() {
        $(this).append($("<span> ***</span>"));
    },
      function() {
          $(this).find("span:last").remove();
      });

       $(".addToWallet").toggle(function(){sidePageType.animate({     // side bar animation
									width: ['190px', 'swing'],
									height: ['400px', 'swing']
									//opacity: 'toggle'
									}, 1500, 'linear', OpenForm());
						    	} ,
						    	function(){ sidePageType.animate({
						    		width: ['10px', 'swing'],
						    		height: ['400px', 'swing']
						    		//opacity: 'toggle'
						    		}, 1500, 'linear', OpenForm()); 
						    	});
							
					
		$(".addThisUrl").click(function(){ sidePageType.animate({
						    		width: ['10px', 'swing'],
						    		height: ['400px', 'swing']
						    		//opacity: 'toggle'
						    		}, 1500, 'linear');
								
						    	});

		
    //Another example for mouse over effect on hyperlinks on page
    $("a").hover(function() { $(this).fadeOut(100); $(this).fadeIn(500); });
/* 
	var login_block = $('#login_block');
	var signup_block = 	$('#signup_block');
	
	$('#signup').click(function()
	{
		document.getElementById('password').value='';
		login_block.hide();
		signup_block.show();
	});

	$('#login').click(function()
	{
		document.getElementById('newpassword').value='';
		signup_block.hide();
		login_block.show();
	});




	$.validator.addMethod("email", function(value, element)
	{
	return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
	}, "Please enter a valid email address.");


	// Validate signup form
	$("#form").validate({
				rules: {
				email: "required email",
				},
						});
http://jsbin.com/ibuyum/41/edit#source
		 */
});


$("input.url_input").keypress(function(e) {
    if(e.keyCode == 13)
        OpenForm();
});


	$(function() {
		// a workaround for a flaw in the demo system (http://dev.jqueryui.com/ticket/4375), ignore!
		$( "#dialog:ui-dialog" ).dialog( "destroy" );
		
		var name = $( "#name" ),
			email = $( "#email" ),
			password = $( "#password" ),
			allFields = $( [] ).add( name ).add( email ).add( password ),
			tips = $( ".validateTips" );

		function updateTips( t ) {
			tips
				.text( t )
				.addClass( "ui-state-highlight" );
			setTimeout(function() {
				tips.removeClass( "ui-state-highlight", 1500 );
			}, 500 );
		}

		function checkLength( o, n, min, max ) {
			if ( o.val().length > max || o.val().length < min ) {
				o.addClass( "ui-state-error" );
				updateTips( "Length of " + n + " must be between " +
					min + " and " + max + "." );
				return false;
			} else {
				return true;
			}
		}

		function checkRegexp( o, regexp, n ) {
			if ( !( regexp.test( o.val() ) ) ) {
				o.addClass( "ui-state-error" );
				updateTips( n );
				return false;
			} else {
				return true;
			}
		}
		
		$( "#dialog-form" ).dialog({
			autoOpen: false,
			height: 400,
			width: 450,
			modal: true,
			buttons: {
				"Create an account": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					bValid = bValid && checkLength( name, "username", 3, 16 );
					bValid = bValid && checkLength( email, "email", 6, 80 );
					bValid = bValid && checkLength( password, "password", 5, 16 );

					bValid = bValid && checkRegexp( name, /^[a-z]([0-9a-z_])+$/i, "Username may consist of a-z, 0-9, underscores, begin with a letter." );
					// From jquery.validate.js (by joern), contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
					bValid = bValid && checkRegexp( email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "eg. Mimi@here.com" );
					bValid = bValid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

					/* alert("<tr>" +
							"<td>" + name.val() + "</td>" + 
							"<td>" + email.val() + "</td>" + 
							"<td>" + password.val() + "</td>"  ); */
					if ( bValid ) {
						$( "#users tbody" ).append( "<tr>" +
							"<td>" + name.val() + "</td>" + 
							"<td>" + email.val() + "</td>" + 
							"<td>" + password.val() + "</td>" +
						"</tr>" ); 
						$( this ).dialog( "close" );
					}
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});

		$( "#create-user" )
			/* .button() */
			.click(function() {
				$( "#dialog-form" ).dialog( "open" );
			});
	});
    /*  $("ul").click(function() {

        if($(this).children("li").length < 5) {
            $(this).append($(" <li><span> I just want to say hello </span> </li>"));
            // else 
            $(this).append($("<div> ------------------------ </div>"));
        }
    });  $("#url_input").keypress(function(e) {
        if(e.keyCode == 13) {
            OpenForm();
        }

    });

 

    $("#url_input").blur(function() {

        OpenForm();
    });
 $("#url_input").blur(function() {
    var RnumOfUrls = $("ul#RightColumn").children("li").length
    var LnumOfUrls = $("ul#LeftColumn").children("li").length
    if(RnumOfUrls < 5) {
    $("ul#RightColumn").append($(" <li ><a href = " + $(this).val() + "> " + $(this).val() + " ----" + $(this).children("li").length + "</a> </li>"));
    }
    else {
    if(LnumOfUrls < 5) {
    $("ul#LeftColumn").append($(" <li ><a href = " + $(this).val() + "> " + $(this).val() + "</a> </li>"));
    }
    else {
    alert('PAGE FULL')
    }
    }
    });*/


   /*
        var urlIn = $('#url_input').val();
        alert(urlIn);
        var request = $.ajax({
        url: "Scripts/check.php",
        type: "GET",
        data: {url_input : urlIn},
        dataType: "application/javascript",
        cache:false
        });

        request.done(function(msg) {
        $("#log").html( msg );
        });

        request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
        });

        */