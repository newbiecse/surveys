QuizUIBuilder = function (argument) {
	
	var $entries;

	var buildUI = function (questions) {

		var html = '';

		questions.forEach(function (q) {

			html += HtmlHelper.draw(q);
		});

		$entries.html(html);
	}

	return {

		init: function () {

			$entries = $('#entries');
		},

		buildUI: function (questions) {
			buildUI(questions);
		}

	}

}();