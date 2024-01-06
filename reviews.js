$(document).ready(function() {
    $('#suggestion-box').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = {
            Name: $('#name').val(),
            DateTime: $('#timestamp').val(),
            Message: $('#suggestion').val()
        };

        $.ajax({
            type: 'POST',
            url: '/store',
            data: formData,
            success: function(response) {
                console.log('Server response', response);
                $('#suggestion-info').text('Suggestion submitted successfully.');
                fetchSuggestions(); // Fetch suggestions after submission
            },
            error: function(error) {
                console.log('Error', error.responseText);
                $('#suggestion-info').text('Error submitting suggestion.');
            }
        });
    });

    function fetchSuggestions() {
    	$.ajax({
        	type: 'GET',
        	url: '/list', // Update the endpoint to match your Flask route
        	success: function(response) {
           	 var suggestions = response.reviews;
            	displaySuggestions(suggestions);
        	},
        	error: function(error) {
            	console.log('Error fetching suggestions', error.responseText);
        	}
    	});
    }

    function displaySuggestions(suggestions) {
    	var suggestionsList = $('#suggestions-list');
    	suggestionsList.empty(); // Clear previous suggestions

    	suggestions.forEach(function(suggestion, index) {
        	var suggestionItem = `
            	<div class="suggestion-item">
                	<p><strong>Name:</strong> ${suggestion.Name}</p>
                	<p><strong>Date/Time:</strong> ${suggestion.DateTime}</p>
                	<p><strong>Message:</strong> ${suggestion.Message}</p>
           		</div>
        	`;
        	suggestionsList.append($(suggestionItem)); // Convert the suggestionItem to jQuery object and append
    	});
    }

    // Fetch suggestions on page load
    fetchSuggestions();
});