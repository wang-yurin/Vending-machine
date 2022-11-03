class ColaGenerator {
  constructor() {
    this.colaList = document.querySelector(".beverage_grid");
  }

  setUp() {
    this.loadData((json) => {
      this.creatColaList(json);
    });
  }

  async loadData(callback) {
    const response = await fetch("js/item.json");

    if (response.ok) {
      callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
    } else {
      alert("통신 에러!" + response.status);
    }
  }

  creatColaList(data) {
    const docFrag = document.createDocumentFragment();

    data.forEach((item) => {
      const li = document.createElement("li");
      const colaTemp = `
      <button class="beverage-button" type="button">
        <img src="${item.img}" alt="${item.name}">
        <strong class="beverage-button-name">${item.name}</strong>
        <span class="beverage-button-amount">${item.cost}원</span>
      </button>
      `;

      li.innerHTML = colaTemp;
      docFrag.appendChild(li);
    });
    this.colaList.appendChild(docFrag);
  }
}
export default ColaGenerator;
