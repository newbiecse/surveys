Quiz = function () {

	var questions, setting;

	// TODO: ajax request
	var init = function () {

		questions = [
			{
				id: 1,
				number: 1,
				type: 0,				
				name: 'Test text box'
			},
			{
				id: 2,
				number: 2,
				type: 1,				
				name: 'Test text area'
			},
			{
				id: 3,
				number: 3,
				type: 2,
				name: 'Test checkbox',
				values: 
				[
					{
						id: 31,
						name: 'checkbox 1',
						checked: true
					},
					{
						id: 32,
						name: 'checkbox 2',
						checked: false
					},					
				]
			},
			{
				id: 4,
				number: 4,
				type: 3,
				name: 'Test radio',
				values: 
				[
					{
						id: 41,
						name: 'radio 1',
						checked: true
					},
					{
						id: 42,
						name: 'radio 2',
						checked: false
					},					
				]
			},
			{
				id: 5,
				number: 5,
				type: 4,
				name: 'Test select',
				values: 
				[
					{
						id: 51,
						name: 'option 1',
						checked: true
					},
					{
						id: 42,
						name: 'option 2',
						checked: false
					},					
				]
			},			
		];

	}

	return {
		init: init,
		getQuestions: function () {
			return questions;
		},
		getSetting: function () {
			return setting;
		}
	}

}();