const historyModule = {

  init(){

    this.render();

    document
      .getElementById('historySearch')
      .addEventListener('input', () => this.render());
  },

  getData(){

    return JSON.parse(localStorage.getItem('du_history') || '[]');
  },

  save(data){

    const list = this.getData();

    list.unshift(data);

    localStorage.setItem(
      'du_history',
      JSON.stringify(list)
    );

    this.render();
  },

  render(){

    const keyword =
      document.getElementById('historySearch')
      .value
      .toLowerCase();

    const list = this.getData();

    const html = list
      .filter(item => {

        return JSON.stringify(item)
          .toLowerCase()
          .includes(keyword);
      })
      .map(item => `

        <div class="history-item">
          <div><b>${item.contact}</b></div>
          <div>${item.phone}</div>
          <div>${item.address}</div>
          <div>${item.time}</div>
        </div>

      `)
      .join('');

    document.getElementById('historyList').innerHTML = html;
  }

}