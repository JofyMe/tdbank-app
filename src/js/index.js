function showActivity() {
    var activityBlock = document.getElementById('activity');
    var detailsBlock = document.getElementById('details');

    activityBlock.classList.remove('hidden');
    detailsBlock.classList.add('hidden');
}

function showDetails() {
    var activityBlock = document.getElementById('activity');
    var detailsBlock = document.getElementById('details');

    activityBlock.classList.add('hidden');
    detailsBlock.classList.remove('hidden');
}

const buttons = document.querySelectorAll('.mainButton');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});