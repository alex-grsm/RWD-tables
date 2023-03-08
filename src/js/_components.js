// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

const { each } = require('jquery');

// import bootstrap from "bootstrap";

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mainTable .tab-content > .tab-pane').forEach((table, i) => {
    $(`#table_${i} .pol-table__table`).responsiveTable({
      addFocusBtn: false,
      addDisplayAllBtn: false,
      stickyTableHeader: false,
      i18n: {
        focus: 'Focus',
        display: 'Display',
        displayAll: 'Display all',
      },
    });
  });


  /** Checkbox limit */
  const onlyThreeCkeckboxes = document.querySelectorAll('.onlyThreeCkeckbox');

  onlyThreeCkeckboxes.forEach(container => {
    const checkboxes = container.querySelectorAll('.btn-toolbar input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach((checkbox, index) => {
      if (index >= 3) {
        checkbox.click();
        checkedCount++;
      }

      checkbox.addEventListener('input', () => {
        if (container.querySelectorAll('.btn-toolbar input[type="checkbox"]:checked').length > 3 && checkbox.checked) {
          checkbox.checked = false;
        }
      });
    });
  });

  /** Custom modals */
  // const cellBtnsWrapper = document.querySelector('.tableWrapper');
  const cellBtns = document.querySelectorAll('.letOpen');

  cellBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const cellBtnsParent = btn.parentElement.parentElement.parentElement;
      let distanceRight = cellBtnsParent.offsetWidth - (btn.offsetLeft + btn.offsetWidth);
      // console.log(distanceRight);

      if (e.target) {
        e.preventDefault();
        target = e.target;
      }

      if (target.classList == 'letOpen') {
        target.children[0]?.classList.toggle('isShow');
        if (distanceRight <= 1) {
          target.children[0].style.left = '-90%';
        }
      }

      if (target.getAttribute('data-attr') == 'close') {
        target.parentElement.parentElement.parentElement?.classList.remove('isShow');
      }
    });
  });

  /** change select */
  const navLinks = document.querySelectorAll('.table-dropdown .nav .nav-link');
  let dropDownBtn = document.querySelector('.table-dropdown .dropdown-toggle');

  navLinks.forEach(link => {
    if (link.classList.contains('active')) {
      dropDownBtn.textContent = link.textContent;
    }

    link.addEventListener('click', () => {
      dropDownBtn.textContent = link.textContent;
    });
  });

  /** Show More Table */
  try {
    const tablesLength = document.querySelectorAll('.withBtnShowMore .ej-tbody').length;

    const showMore = document.createElement('div');
    showMore.classList.add('more-items');
    showMore.setAttribute('id', 'more-items');

    showMore.innerHTML = `
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 1L11 10L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
      `;

    document.querySelector('.withBtnShowMore .pol-table__table').appendChild(showMore);

    let items = 2;

    showMore.addEventListener('click', () => {
      items += 1;
      const array = Array.from(document.querySelector('.tableWrapper').children);
      const visItems = array.slice(1, items);

      visItems.forEach(el => el.classList.add('is-visible'));

      if (visItems.length === tablesLength) {
        showMore.style.display = 'none';
      }
    });
    showMore.click();
  } catch (error) {}
});
