$("#myInput").keyup(function () {
  var currentValue = $(this).val().toLowerCase().trim();

  // Get all cards
  var allCards = $(".cards")

  // Remove display none from all cards
  allCards.show();

  // Filter cards that lowercase title don't start with search value
  var nonMatchingCards = allCards.filter(function () {
    var titleText = $(this).find(".titleGrapes").text().toLowerCase().trim();
    return !titleText.startsWith(currentValue);
  })

  // Set display none to all filtered cards
  nonMatchingCards.hide();

  if (nonMatchingCards.length === allCards.length) {
    $(".nothingFound").show();
  } else {
    $(".nothingFound").hide();
  }
});

