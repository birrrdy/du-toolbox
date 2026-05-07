const quoteModule = {

  init(){

    this.addItem();

    document
      .getElementById('addQuoteItemBtn')
      .addEventListener('click', () => this.addItem());

    document
      .getElementById('generateQuoteBtn')
      .addEventListener('click', () => this.generate());
  },

  addItem(){

    const row = document.createElement('div');

    row.className = 'size-row';

    row.innerHTML = `
      <input type="number" class="q-width" placeholder="寬 cm">
      <input type="number" class="q-height" placeholder="高 cm">
      <input type="number" class="q-pcs" value="1" placeholder="片數">
      <button type="button">✕</button>
    `;

    row.querySelector('button')
      .addEventListener('click', () => {
        row.remove();
        this.calculate();
      });

    row.querySelectorAll('input')
      .forEach(el => {
        el.addEventListener('input', () => this.calculate());
      });

    document.getElementById('quoteItems').appendChild(row);
  },

  calculate(){

    let totalTai = 0;

    document.querySelectorAll('#quoteItems .size-row')
      .forEach(row => {

        const w = parseFloat(row.querySelector('.q-width').value) || 0;
        const h = parseFloat(row.querySelector('.q-height').value) || 0;
        const p = parseInt(row.querySelector('.q-pcs').value) || 0;

        totalTai += ((w * h) / 900) * p;
      });

    const price = parseFloat(document.getElementById('unitPrice').value) || 0;

    document.getElementById('quoteTotalTai').innerText = totalTai.toFixed(2);
    document.getElementById('quoteTotalPrice').innerText = Math.round(totalTai * price);
  },

  generate(){

    this.calculate();

    const total = document.getElementById('quoteTotalPrice').innerText;

    document.getElementById('quoteResult').value =
`您好，小編為您提供報價：

總金額為 ${total} 元

確認後即可安排施工，謝謝！`;
  }

}