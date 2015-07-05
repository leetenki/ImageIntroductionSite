window.onload = function() {




	/**********************************************/
	//                Smooth scroll
	/**********************************************/
	$(function(){
	    // #で始まるアンカーをクリックした場合に処理
	    $('ul.navbar-nav li a[href^=#]').click(function() {
	        // スクロールの速度
	        var speed = 400; // ミリ秒
	        // アンカーの値取得
	        var href= $(this).attr("href");
	        // 移動先を取得
	        var target = $(href == "#" || href == "" ? 'html' : href);
	        // 移動先を数値で取得
	        var position = target.offset().top;
	        // スムーススクロール
	        $('body,html').animate({scrollTop:position}, speed, 'swing');
	        return false;
	    });
	});	


	/**********************************************/
	//                Modal window
	/**********************************************/
	$('#exampleModal').on('show.bs.modal', function (event) {
	    var button = $(event.relatedTarget) // Button that triggered the modal
	    var recipient = button.data('whatever') // Extract info from data-* attributes
	    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	    var modal = $(this)
	    // modal.find('.modal-title').text('New message to ' + recipient)
	    // modal.find('.modal-body input').val(recipient)
	});

	// event processor
	$('button#submit').click(function(e){
		var email = $("#email-text")[0].value;
		var message = $("#message-text")[0].value;
		alert(email + "," + message);
		$('#exampleModal').modal('hide');
	});
}
var debug