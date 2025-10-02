
// Minimal demo JS for AptMart
document.addEventListener('DOMContentLoaded', function(){
  const locForm = document.getElementById('locForm');
  if(locForm) locForm.addEventListener('submit', function(e){
    e.preventDefault();
    const loc = document.getElementById('locationInput').value || '';
    if(!loc.trim()){ alert('Please enter your apartment complex or area.'); return; }
    alert('Demo search for: ' + loc + '\n(Replace with real API integration)');
  });
});
