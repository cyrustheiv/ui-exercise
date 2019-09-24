(() => {
  // initialise variables for the modal container and body
  const sidebarToggle = document.getElementById('toggle__sidebar');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  // set up function onclick when #toggle__sidebar is clicked
  // toggle .open class on #sidebar element
  // toggle .sidebar__open class on #content element
  sidebarToggle.onclick = function(){
    sidebar.classList.toggle('open');
    content.classList.toggle('sidebar__open');
  }
})();