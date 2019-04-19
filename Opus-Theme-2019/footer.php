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
    <a href="https://opuspharmserve.com/downloads/"><i class="fa fa-download" aria-hidden="true"></i> Click Here to Access Our Free Downloadable Resources </a> 


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



<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLKRKK4');</script>
<!-- End Google Tag Manager -->

</body>
</html>