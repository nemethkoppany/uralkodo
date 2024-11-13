const array = [
    { 
        uralkodo: "I. István",
         esemeny: "Koronázás",
          evszam: 1000 
    },
    { 
        uralkodo: "I. István", 
        esemeny: "Pannonhalmi apátság megalapítása", 
        evszam: 1001 
    },
    { 
        uralkodo: "IV. Béla",
         esemeny: "Tatárjárás", 
         evszam: "1241-1242" 
    },
    {
         uralkodo: "Mátyás király", 
         esemeny: "Bécs elfoglalása", 
         evszam: 1485 
    },
    { uralkodo: "Mátyás király", 
        esemeny: "Kenyérmezei csata",
         evszam: 1479 
    },
    { 
        uralkodo: "II. Rákóczi Ferenc",
         esemeny: "A szabadságharc kezdete",
          evszam: 1703
     },
    {
         uralkodo: "II. Rákóczi Ferenc",
          esemeny: "A szabadságharc vége", 
          evszam: 1711
     }
  ];

  createHTMLelement('table', 'uralkodok_table', document.body);
  create_HTML_element_with_parent_id('thead', 'uralkodok_thead', 'uralkodok_table');
  create_HTML_element_with_parent_id('tr', 'uralkodok_thead_row', 'uralkodok_thead');
  create_HTML_element_with_parent_id('tbody', 'uralkodok_tbody', 'uralkodok_table');
  
  createTableHeaderCells();
  renderTable(array);