$(document).ready(function () {
  var S1Data = [
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
  ];

  var S2Data = [
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
  ];

  var S1Columns = [
    { data: "name", title: "Product Name" },
    { data: "expens", title: "Expensi" },
    { data: "variant", title: "Variant" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var S2Columns = [
    { data: "name", title: "Product Name" },
    { data: "expens", title: "Expensi" },
    { data: "variant", title: "Variant" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var table = $("#example").DataTable({
    data: S1Data,
    columns: S1Columns,
    language: {
      searchPlaceholder: "Search...",
      paginate: {
        first: "Start",
        last: "End",
        next: "Next",
        previous: "Previous",
      },
    },
  });

  $("#tableSelect").on("change", function () {
    var selectedValue = $(this).val();
    var newData = selectedValue === "S1" ? S1Data : S2Data;
    var newColumns = selectedValue === "S1" ? S1Columns : S2Columns;

    table.clear().rows.add(newData).draw();
    table.columns().every(function (index) {
      this.header().innerHTML = newColumns[index].title;
    });
    table.draw();
  });
});
