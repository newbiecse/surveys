HtmlHelper = function () {

	var entry = function (question) {

		var html =
		'<div class="form-group entry" data-questionId="' + question.id + '">' +
			entryHeader(question) + 
			entryBody(question) +
		'</div>';

		return html;
	}

	var entryHeader = function (question) {

		var html =
		'<div class="entry-header">' +
			'<span class="badge badge-info entry-number">' + question.number + '</span>' +
			'<div class="entry-header-content">' +
				question.name +
			'</div>' +		
		'</div>';

		return html;
	}

	var entryBody = function (question) {

		var controlHtml = controlFor(question);

		var html =
		'<div class="entry-body">' +
			controlHtml +
		'</div>';

		return html;
	}

	var controlFor = function (question) {

		switch(question.type) {
			case questionType.TEXTBOX:
				return textboxFor(question);
			case questionType.TEXTAREA:
				return textareaFor(question);
			case questionType.CHECKBOX:
				return checkboxFor(question);
			case questionType.RADIO:
				return radioFor(question);
			case questionType.SELECT:
				return selectFor(question);
			case questionType.MULTIPLE_SELECT:
				return selectFor(question);
			default:
				alert('invalid type!');
		}
	}

	var textboxFor = function (question) {

		var html = '<input type="text" class="form-control">';
		
		return html;
	}

	var textareaFor = function (question) {		

		var html = '<textarea class="form-control"></textarea>';

		return html;
	}

	var checkboxFor = function (question) {

		var html = '';

		question.values.forEach(function(v) {

			var tempId = question.id + '-' + v.id;

			html +=
			'<div class="checkbox checkbox-success">' +
			    '<input type="checkbox" name="' + tempId + '" value="' + v.id + '" id="cbx-' + tempId + '">' +
			    '<label for="cbx-' + tempId + '">' + v.name +'</label>' +
			'</div>';
		})

		return html;
	}

	var radioFor = function (question) {

		var html = '';

		question.values.forEach(function(v) {

			var tempId = question.id + '-' + v.id;

			html +=
			'<div class="radio radio-success">' +
			    '<input  type="radio" name="' + question.id + '" id="cbx-' + tempId + '" value="' + v.id + '">' +
			    '<label for="cbx-' + tempId + '">' + v.name + '</label>' +
			'</div>';
		})

		return html;
	}

	var selectFor = function (question) {

		var html = '<select class="form-control">';

		question.values.forEach(function(v) {

			var tempId = question.id + '-' + v.id;

			html += '<option value="' + v.id + '">' + v.name + '</option>';				
		})

		html += '</select>';

		return html;
	}

	return {

		draw: function (question) {

			return entry(question);
		}
	}	

}();