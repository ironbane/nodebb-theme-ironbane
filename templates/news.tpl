<div id="topic-list">

</div>

<script>
$(function () {
	$.getJSON('api/category/1/announcements', function( data ) {

		console.log(data);

		var months = new Array("January", "February", "March",
		"April", "May", "June", "July", "August", "September",
		"October", "November", "December");

		var html = '<div class="row">';

		data.topics.forEach(function (topic) {
			if (!topic.deleted) {
				var date = new Date(parseInt(topic.timestamp, 10));
				var currentDate = date.getDate();
				var currentMonth = date.getMonth();
				var currentYear = date.getFullYear();

				html += '<div class="col-xs-3">';
				html += '' + currentDate + ' ' + months[currentMonth] + ' ' + currentYear + '';
				html += '</div>';
				html += '<div class="col-xs-9">';
				html += '<a href="/topic/' + topic.slug + '">' + topic.title + '</a>';
				html += '</div>';
			}
		});

		html += '</div>';

		$('#topic-list').html(html);
	});
})
</script>
