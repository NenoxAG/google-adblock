// Saves options to chrome.storage
function save_options(event) {
  event.preventDefault();

  var blockTop = document.getElementById('enableTopBlocker').checked;
  var blockBottom = document.getElementById('enableBottomBlocker').checked;
  var blockSidebar = document.getElementById('enableSidebarBlocker').checked;

  chrome.storage.sync.set({
    blockTop,
    blockBottom,
    blockSidebar
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('save');
    status.innerText = 'Saved';
    status.classList.add('success');
    setTimeout(function() {
      status.innerText = 'Save';
      status.classList.remove('success');
    }, 750);
  });
}
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    blockTop: true,
    blockBottom: true,
    blockSidebar: true
  }, function(items) {
    document.getElementById('enableTopBlocker').checked = items.blockTop;
    document.getElementById('enableBottomBlocker').checked = items.blockBottom;
    document.getElementById('enableSidebarBlocker').checked = items.blockSidebar;
  });
}

  function openGithub() {
    chrome.tabs.create({
      active: true,
      url: 'https://github.com/NenoxAG/google-adblock'
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
  document.getElementById('github').addEventListener('click', openGithub)