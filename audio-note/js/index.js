var noteInput, noteName, textEntered, target;

noteInput = document.getElementById('noteInput');
noteName = document.getElementById('noteName');

function writeLabel(e) {
	if (!e) {
  	e = window.event;
  }
  target = e.target || e.srcElement;
  textEntered = target.value;
  noteName.textContent = textEntered
}

if (document.addEventListener) {
	document.addEventListener('click', function(e) {
  	recorderControls(e);
  }, false);
} else {
	document.attachEvent('onclick', function(e) {
  	recorderControls(e);
  });
  noteInput.attachEvent('onkeyup', writeLabel);
}

function recorderControls(e) {
	if (!e) {
  	e = window.event;
  }
  target = e.target || e.srcElement;
  if (e.preventDefault) {
  	e.preventDefault();
  } else {
  	e.returnValue = false;
  }
  switch(target.getAttribute('data-state')) {
  	case 'record':
    	record(target);
      break;
    case 'stop':
    	stop(target);
      break;
  }

}

function record(target) {
	console.log('record');
	target.setAttribute('data-state', 'stop');
  target.textContent = 'stop';
}

function stop(target) {
	console.log('stop');
	target.setAttribute('data-state', 'record');
  target.textContent = 'record';
}
