const reportModule = {

    row.className = 'size-row';

    row.innerHTML = `
      <input type="number" class="r-width" placeholder="寬 cm">
      <input type="number" class="r-height" placeholder="高 cm">
      <input type="number" class="r-pcs" value="1" placeholder="片數">
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

    document.getElementById('reportItems').appendChild(row);
  },

  calculate(){

    let totalTai = 0;
    let totalPcs = 0;

    document.querySelectorAll('#reportItems .size-row')
      .forEach(row => {

        const w = parseFloat(row.querySelector('.r-width').value) || 0;
        const h = parseFloat(row.querySelector('.r-height').value) || 0;
        const p = parseInt(row.querySelector('.r-pcs').value) || 0;

        totalTai += ((w * h) / 900) * p;
        totalPcs += p;
      });

    document.getElementById('reportTotalTai').innerText = totalTai.toFixed(2);
    document.getElementById('reportTotalPcs').innerText = totalPcs;
  },

  generate(){

    this.calculate();

    const contact = document.getElementById('contact').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const tai = document.getElementById('reportTotalTai').innerText;

    document.getElementById('reportResult').value =
`新訂單

聯絡人：${contact}
電話：${phone}
地址：${address}
總才數：${tai}`;

    historyModule.save({
      type:'report',
      contact,
      phone,
      address,
      tai,
      time:new Date().toLocaleString()
    });
  }

}