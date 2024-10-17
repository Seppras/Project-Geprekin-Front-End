// new DataTable("#example");
$(document).ready(function () {
  var table = $("#example").DataTable({
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
});
