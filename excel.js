function exportExcel(){

  const history =
    JSON.parse(localStorage.getItem('du_history') || '[]');

  if(history.length === 0){

    alert('沒有資料可以匯出');
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(history);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    'DU紀錄'
  );

  XLSX.writeFile(
    workbook,
    'DU歷史紀錄.xlsx'
  );
}