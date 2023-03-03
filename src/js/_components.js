// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

const { each } = require("jquery");

// import bootstrap from "bootstrap";

window.addEventListener('DOMContentLoaded', () => {

    $('#pol-table').responsiveTable({
        // sortable: true,
        addFocusBtn: false,
        addDisplayAllBtn: false,
        stickyTableHeader: false,
        i18n: {
            focus : 'Focus',
            display : 'Display',
            displayAll : 'Display all'
        }
    });

    $('#pol-table2').responsiveTable({
        // sortable: true,
        addFocusBtn: false,
        addDisplayAllBtn: false,
        stickyTableHeader: false,
        i18n: {
            focus : 'Focus',
            display : 'Display',
            displayAll : 'Display all'
        }
    });

    document.querySelector('#toggle-pol-table-col-4').click();
    document.querySelector('#toggle-pol-table-col-5').click();
    document.querySelector('#toggle-pol-table-col-6').click();
    document.querySelector('#toggle-pol-table-col-7').click();
    document.querySelector('#toggle-pol-table-col-8').click();
    document.querySelector('#toggle-pol-table-col-9').click();


    /** Checkbox limit */
    $('#table_1 .dropdown-menu .checkbox-row input').on('input', function(e) {
        // console.log($('#table_1 .dropdown-menu .checkbox-row input:checked').length);
        if($('#table_1 .dropdown-menu .checkbox-row input:checked').length > 3) {
            this.checked = false;
        }
    });


    /** Custom modals */
    const cellBtns = document.querySelectorAll('.letOpen');

    cellBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (e.target) {
                e.preventDefault();
                target = e.target;
            }

            if (target.classList == 'letOpen') {
                target.children[0]?.classList.toggle('isShow');
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

    // const showMore = document.querySelector('#more-items');
    const tablesLength = document.querySelectorAll('.ej-tbody').length;

    const showMore = document.createElement('div');
    showMore.classList.add('more-items');
    showMore.setAttribute('id', 'more-items');

    showMore.innerHTML = `
        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 1L11 10L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `;

    document.querySelector('#pol-table').appendChild(showMore);

    let items = 2;

    showMore.addEventListener('click', () => {
        items += 1;
        const array = Array.from(document.querySelector('.tableWrapper').children);
        const visItems = array.slice(1, items);

        visItems.forEach(el => el.classList.add('is-visible'));

        if (visItems.length === tablesLength ) {
            showMore.style.display = 'none';
        }
    });
    showMore.click();


});
