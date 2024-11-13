function createTableCell(tagName, innerHTML, parentElement) {
    const tablecell = document.createElement(tagName);
    tablecell.innerHTML = innerHTML;
    parentElement.appendChild(tablecell);
    return tablecell;
}

function createHTMLelement(tag, id, parent) {
    const HTML_element = document.createElement(tag);
    HTML_element.id = id;
    parent.appendChild(HTML_element);
}

function create_HTML_element_with_parent_id(tag, id, parentid) {
    const parent_element = document.getElementById(parentid);
    if (parent_element != undefined) {
        createHTMLelement(tag, id, parent_element);
    }
}

function createTableHeaderCells() {
    const tr_element = document.getElementById('uralkodok_thead_row'); // Fejlécsor elem
    createTableCell("th", "Uralkodó", tr_element);
    createTableCell("th", "Esemény", tr_element);
    createTableCell("th", "Évszám", tr_element);
}

function renderTable(array) {
    const tbody = document.getElementById('uralkodok_tbody');
    tbody.innerHTML = '';  // Töröljük az esetleges előző tartalmat
    for (const arrays of array) {
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);

        createTableCell("td", arrays.uralkodo, tbody_tr);
        createTableCell("td", arrays.esemeny, tbody_tr);
        createTableCell("td", arrays.evszam, tbody_tr);
    }
}