$("#closed-letter").on("click", function () {
  $("#closed-letter").addClass("hide");
  $("#acceptance-letter").removeClass("hide");
});

$("#open-shopping-list").on("click", function () {
  $("#shopping-list").removeClass("hide");
  $("#acceptance-letter").addClass("hide");
});
//temporarily
$("#open-shopping").on("click", function () {
  $("#shopping-list").addClass("hide");
  $("#diagon-alley").addClass("hide");
  $("#the-great-hall").removeClass("hide");
});

$("#start-sorting").on("click", function () {
  $("#welcome-text").addClass("hide");
  $("#sorting-quiz").removeClass("hide");
  $("#welcome").addClass("scroll");
  $("input:not(:checked)").parent().removeClass("checked");
  $("input:checked").parent().addClass("checked");
});

$("#sorting-quiz input").click(function () {
  $("input:not(:checked)").parent().removeClass("checked");
  $("input:checked").parent().addClass("checked");
});

$("#sorting-quiz").submit(function (event) {
  event.preventDefault();
  let s = 0;
  let g = 0;
  let r = 0;
  let h = 0;

  $("input:checked").each(function () {
    switch ($(this).val()) {
      case "s":
        s++;
        break;
      case "r":
        r++;
        break;
      case "g":
        g++;
        break;
      case "h":
        h++;
        break;
    }
  });
  let results = { s, r, g, h };
  const maxVal = Math.max(...Object.values(results));
  const key = Object.keys(results).find((key) => results[key] === maxVal);

  let house = "";
  switch (key) {
    case "s":
      house = "Slytherin";
      break;
    case "r":
      house = "Ravenclaw";
      break;
    case "g":
      house = "Gryffindor";
      break;
    case "h":
      house = "Hufflepuff";
      break;
  }
  $.ajax({
    type: "GET",
    url: "/Account/Index",
    data: { house: house },
    success: function () {
      $("#new-house").text(house);
      $("#sorting-result").removeClass("hide");
      $("#sorting-quiz").addClass("hide");
    },
    error: function () {
      alert(`Error while fetching patrons`);
    },
  });

  $("#sorting-result").removeClass("hide");
  $("#sorting-quiz").addClass("hide");
  $("#welcome").removeClass("scroll");
});
