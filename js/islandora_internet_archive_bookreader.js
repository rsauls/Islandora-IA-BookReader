/**
 * @file
 *
 * Defines initializing/attaching the Book Reader to the defined element.
 */
(function ($) {
  Drupal.behaviors.islandoraInternetArchiveBookReader = {
    attach: function(context, settings) {
      $('.islandora-internet-archive-bookreader', context).once('islandora-bookreader', function () {
        var bookReader = new IslandoraBookReader(settings.islandoraInternetArchiveBookReader);
        // Initialize and Render the BookReader.
        bookReader.init();
        // We currently don't support read-aloud.
        $('#BRtoolbar').find('.read').hide();
        if (!bookReader.searchEnabled()) {
          $('#textSrch').hide();
          $('#btnSrch').hide();
        }
        if (bookReader.settings.tocFound == 'true') {
            bookReader.updateTOC(bookReader.settings.tocEntries['table_of_contents']);
        }

        if ($.browser.mobile && settings.islandoraInternetArchiveBookReader.mobilize) {
          bookReader.goFullScreen();
        }
      });
    }
  };
})(jQuery);
