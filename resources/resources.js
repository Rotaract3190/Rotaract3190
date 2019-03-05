const datatable = new DataTable('#datatable', {
    columns: [
        { name: 'Files', width: 300, format: formatFileName },
        { name: 'Size', width: 150, align: 'right' },
        { name: 'Last Updated', width: 200, align: 'right' },
      ],
      data: [
        {
          'Files': 'Documents',
          'Size': '2M',
          'Last Updated': '',
          'indent': 0
        },
        {
          'Files': 'project.pdf',
          'Size': '1M',
          'Last Updated': 'Yesterday',
          'indent': 1
        },
        {
          'Files': 'my-face.png',
          'Size': '500k',
          'Last Updated': '2018-04-09',
          'indent': 1
        },
        {
          'Files': 'Projects',
          'Size': '77M',
          'Last Updated': '',
          'indent': 0
        },
        {
          'Files': 'frappe-gantt',
          'Size': '23M',
          'Last Updated': '',
          'indent': 1
        },
        {
          'Files': 'dist',
          'Size': '50k',
          'Last Updated': '2018-06-01',
          'indent': 2
        },
        {
          'Files': 'package.json',
          'Size': '5k',
          'Last Updated': '2018-06-01',
          'indent': 2
        },
        {
          'Files': 'frappe-datatable',
          'Size': '54M',
          'Last Updated': '',
          'indent': 1
        },
        {
          'Files': 'src',
          'Size': '53k',
          'Last Updated': 'A few seconds ago',
          'indent': 2
        },
      ],
      treeView: true
  });
