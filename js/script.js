// Close the alert notification by clicking the x button
var alertButton = document.getElementById('close-button');
var alertDiv = document.querySelector('.alert-message');
var dashboard = alertDiv.parentNode;

alertButton.addEventListener('click', () => {
	dashboard.removeChild(alertDiv);
});

// Display notifications when the user clicks on the notifications icon 
var notificationIcon = document.querySelector('.notifications');
var dropdown = document.querySelector('.notification-dropdown');
var dropdownUL = dropdown.firstElementChild;
var notification1 = document.createElement('li');
var notification2 = document.createElement('li');
var circle = document.querySelector('.circle');

dropdown.style.display = 'none';

notificationIcon.addEventListener('click', () => {
	if (dropdown.style.display === 'none') {
		dropdown.style.display = 'block';
		dropdownUL.appendChild(notification1);
		notification1.textContent = "Lorem ipsum dolor sit amet, at vel iudico docendi philosophia.";
		dropdownUL.appendChild(notification2);
		notification2.textContent = "Modus simul accommodare his et, qui debet viderer fabellas at, id est tibique verterem invenire.";
		circle.style.backgroundColor = '#f2f2f2';
	} else if (dropdown.style.display === 'block') {
		dropdown.style.display = 'none';
	}
});

// Submit the form and display a confirmation or an error message
var sendButton = document.getElementById('message-button');
var userSearch = document.getElementById('user-search');

sendButton.addEventListener('click', (e) => {
	e.preventDefault();

	var confirmation = document.getElementById('confirmation');
	var errorMessage = document.getElementById('error-message');
	var userName = userSearch.value;
	var userMessage = document.getElementById('message-user');
	var message = userMessage.value;

	if (userName.length > 0 && message.length > 0) {
		sendButton.style.display = 'none';
		errorMessage.style.display = 'none';
		confirmation.style.display = 'block';
	} else {
		sendButton.style.display = 'none';
		errorMessage.style.display = 'block';
	}

	userSearch.addEventListener('click', () => {
		sendButton.style.display = 'block';
		errorMessage.style.display = 'none';
		confirmation.style.display = 'none';
	});

	userMessage.addEventListener('click', () => {
		sendButton.style.display = 'block';
		errorMessage.style.display = 'none';
		confirmation.style.display = 'none';
	});
});

// Local storage 
var saveButton = document.getElementById('save-button');
var cancelButton = document.getElementById('cancel-button');

var notifications = document.getElementById('email_notifications');
var publicProfile = document.getElementById('public_profile');
var timezone = document.getElementById('timezones');

var notificationSetting = JSON.parse(localStorage.getItem('notifications'));
var profileSetting = JSON.parse(localStorage.getItem('publicProfile'));
var timezoneSetting = localStorage.getItem('timezone');

saveButton.addEventListener('click', () => {
	localStorage.setItem('notifications', notifications.checked);
	localStorage.setItem('publicProfile', publicProfile.checked);
	localStorage.setItem('timezone', timezone.value);
});

function load() {
	document.getElementById('email_notifications').checked = notificationSetting;
	document.getElementById('public_profile').checked = profileSetting;
	if (timezoneSetting) {
		document.getElementById('timezones').value = timezoneSetting;
	}
}

cancelButton.addEventListener('click', () => {
	localStorage.clear();
});

load();

// Traffic chart toggle switch
var hourly = document.getElementById('hour');
var daily = document.getElementById('day');
var weekly = document.getElementById('week');
var monthly = document.getElementById('month');

var canvasHourly = document.getElementById('chart-1');
var canvasDaily = document.getElementById('chart-1-2');
var canvasWeekly = document.getElementById('chart-1-3');
var canvasMonthly = document.getElementById('chart-1-4');

hourly.addEventListener('click', () => {
	var ctx = document.getElementById("chart-1");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels:[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
			datasets: [{
				data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],

				backgroundColor: 'rgba(73, 138, 174, .5)',
				borderColor: 'rgba(73, 138, 174, 1)',
				borderWidth: 2,
				pointRadius: 5,
				pointBackgroundColor: 'rgb(255, 255, 255)',
				lineTension: 0.1,
			}]
		},
		options: {
			legend: {
				display: false
			},
			responsive: true,
			maintainAspectRatio: false,
			pointStyle: 'circle',
			showLines: true,
			spanGaps: true,
			// scaleBeginAtZero: true
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						max: 2500,
						beginAtZero: true,
						stepSize: 500,
					},
					gridLines: {
						offsetGridLines: true
					}
				}]
			}
		}
	});

	canvasHourly.style.display = 'block';
	canvasDaily.style.display = 'none';
	canvasWeekly.style.display = 'none';
	canvasMonthly.style.display = 'none';
});

daily.addEventListener('click', () => {
	var ctx = document.getElementById("chart-1-2");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels:[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
			datasets: [{
				data: [0, 750, 1000, 1250, 1000, 1750, 1250, 1500, 1000, 750, 500, 1000, 750],

				backgroundColor: 'rgba(73, 138, 174, .5)',
				borderColor: 'rgba(73, 138, 174, 1)',
				borderWidth: 2,
				pointRadius: 5,
				pointBackgroundColor: 'rgb(255, 255, 255)',
				lineTension: 0.1,
			}]
		},
		options: {
			legend: {
				display: false
			},
			responsive: true,
			maintainAspectRatio: false,
			pointStyle: 'circle',
			showLines: true,
			spanGaps: true,
			// scaleBeginAtZero: true
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						max: 2500,
						beginAtZero: true,
						stepSize: 500,
					},
					gridLines: {
						offsetGridLines: true
					}
				}]
			}
		}
	});

	canvasHourly.style.display = 'none';
	canvasDaily.style.display = 'block';
	canvasWeekly.style.display = 'none';
	canvasMonthly.style.display = 'none';
});


weekly.addEventListener('click', () => {
	var ctx = document.getElementById("chart-1-3");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels:[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
			datasets: [{
				data: [0, 250, 1000, 2000, 1250, 1500, 1000, 1250, 1000, 1500, 1000, 5000, 250],

				backgroundColor: 'rgba(73, 138, 174, .5)',
				borderColor: 'rgba(73, 138, 174, 1)',
				borderWidth: 2,
				pointRadius: 5,
				pointBackgroundColor: 'rgb(255, 255, 255)',
				lineTension: 0.1,
			}]
		},
		options: {
			legend: {
				display: false
			},
			responsive: true,
			maintainAspectRatio: false,
			pointStyle: 'circle',
			showLines: true,
			spanGaps: true,
			// scaleBeginAtZero: true
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						max: 2500,
						beginAtZero: true,
						stepSize: 500,
					},
					gridLines: {
						offsetGridLines: true
					}
				}]
			}
		}
	});

	canvasHourly.style.display = 'none';
	canvasDaily.style.display = 'none';
	canvasWeekly.style.display = 'block';
	canvasMonthly.style.display = 'none';
});


monthly.addEventListener('click', () => {
	var ctx = document.getElementById("chart-1-4");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels:[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
			datasets: [{
				data: [0, 750, 500, 750, 1500, 1250, 1750, 1000, 1500, 1250, 2000, 1000, 750],

				backgroundColor: 'rgba(73, 138, 174, .5)',
				borderColor: 'rgba(73, 138, 174, 1)',
				borderWidth: 2,
				pointRadius: 5,
				pointBackgroundColor: 'rgb(255, 255, 255)',
				lineTension: 0.1,
			}]
		},
		options: {
			legend: {
				display: false
			},
			responsive: true,
			maintainAspectRatio: false,
			pointStyle: 'circle',
			showLines: true,
			spanGaps: true,
			// scaleBeginAtZero: true
			scales: {
				yAxes: [{
					ticks: {
						min: 0,
						max: 2500,
						beginAtZero: true,
						stepSize: 500,
					},
					gridLines: {
						offsetGridLines: true
					}
				}]
			}
		}
	});

	canvasHourly.style.display = 'none';
	canvasDaily.style.display = 'none';
	canvasWeekly.style.display = 'none';
	canvasMonthly.style.display = 'block';
});
