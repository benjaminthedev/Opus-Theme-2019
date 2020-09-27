<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 */
?>
	</div><!-- /.site-main -->

	<!-- Footer -->
	<footer id="colophon" class="site-footer fw-footer <?php the_core_get_footer_class(); ?>" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
		<?php the_core_footer(); ?>
	</footer>

  <div class="downloadSection">
    <a href="https://opuspharmserve.com/downloads/" class="footer-download-link" title="Click Here to Access Our Free Downloadable Resources"><i class="fa fa-download" style="color: white;" aria-hidden="true"></i> <span class="downloadable-intro-text">Click Here to Access Our Free</span> Downloadable Resources </a>


    <!-- <a class="whitee" href="https://codeworxdigital.co.uk/" target="_blank">Digital Marketing Agency</a>		 -->


  </div>
</div><!-- /#page -->

<style>

a.whitee{
    margin-top: 0px;
    color: #2196f3;
    display: block;
}

a.whitee:hover{
    color:#2196f3;
}


</style>

<script  type="text/javascript">

jQuery(document).ready(function() {


$(function() {
  $("#pa_course-type").change(function() {
    if ($("#pa_course-type option").filter(function(i, e) { return $(e).text() == "Face to Face"}).is(":selected")) {
      $("#bookNow").show();
      $(".single_add_to_cart_button").hide();
	console.log('show unique button');
    } else {
      $("#bookNow").hide();
      $(".single_add_to_cart_button").show();
    }
  }).trigger('change');
});

});

</script>

<?php the_core_go_to_top_button(); ?>
<?php wp_footer(); ?>





</body>
</html>
