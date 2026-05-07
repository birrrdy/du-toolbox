window.addEventListener('DOMContentLoaded', () => {

  quoteModule.init();
  reportModule.init();
  historyModule.init();

  document.getElementById('clearAllBtn')
    .addEventListener('click', clearAllData);

  document.getElementById('exportExcelBtn')
    .addEventListener('click', exportExcel);

});

function clearAllData(){

  if(!confirm('確定清空所有資料？')) return;

  localStorage.clear();
  location.reload();
}