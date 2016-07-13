(function ($) {
  $(document).ready(function() {
    // dl class islandora-metadata-fields is used in metadatata displays,
    // class solr-fields in search results.
    $("dl.islandora-metadata-fields, dl.solr-fields > dd").each(function() {
      // Value of the <dd> cannot be emtpy or contain only puncutation.
      if ($.trim($(this).text()) == '' || $.trim($(this).text()).match(/^[.,;:\-]$/)) {
        // Hide the <dd>.
        $(this).hide();
        // And hide the corresponding <dt>.
        $(this).prev().hide();
      }
    }
 )});
})(jQuery);
