QuizUIBuilder = function (argument) {
	
	var $entries;

	var buildUI = function (questions) {

		questions.forEach(function (q) {

			var html = HtmlHelper.draw(q);

			$entries.append(html);

			if (q.answer != null && typeof q.answer != undefined) {

				var $dom = $entries.find('.entry:last');

				switch (q.type) {

					case questionType.TEXTBOX:					
						$dom.find('input').val(q.answer);
						break;

					case questionType.TEXTAREA:
						$dom.find('textarea').val(q.answer);
						break;

					case questionType.SELECT:
						$dom.find('select').val(q.answer);
						break;

					case questionType.RADIO:
						var checked = q.answer.split(',');
						$dom.find('input').val(checked);
						break;
						
					case questionType.CHECKBOX:

						var checked = q.answer.split(',');

						checked.forEach(function(answerId) {

							var tempId = q.id + '-' + answerId;
							$dom.find('input[name="' + tempId + '"]').prop('checked', true);
						});

						break;
				}

				if (q.type == questionType.TEXTBOX) {

					var val = '<h1 "test">';
					$dom.find('input').val(val);
				}

			}


			
		});

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