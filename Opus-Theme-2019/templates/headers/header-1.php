<?php
$the_core_header_settings       = defined( 'FW' ) ? fw_get_db_settings_option( 'header_settings' ) : array();
$the_core_enable_header_top_bar = isset( $the_core_header_settings['enable_header_top_bar']['selected_value'] ) ? $the_core_header_settings['enable_header_top_bar']['selected_value'] : 'no';
$the_core_top_bar_text          = isset( $the_core_header_settings['enable_header_top_bar']['yes']['header_text'] ) ? $the_core_header_settings['enable_header_top_bar']['yes']['header_text'] : '';
$the_core_enable_header_socials = isset( $the_core_header_settings['enable_header_top_bar']['yes']['enable_header_socials']['selected_value'] ) ? $the_core_header_settings['enable_header_top_bar']['yes']['enable_header_socials']['selected_value'] : 'no';
$the_core_enable_search         = isset( $the_core_header_settings['enable_search']['selected_value'] ) ? $the_core_header_settings['enable_search']['selected_value'] : 'no';
$the_core_search_type           = isset( $the_core_header_settings['enable_search']['yes']['search_type']['selected'] ) ? $the_core_header_settings['enable_search']['yes']['search_type']['selected'] : '';
$the_core_search_position       = isset( $the_core_header_settings['enable_search']['yes']['search_position'] ) ? $the_core_header_settings['enable_search']['yes']['search_position'] : 'top_bar';
$the_core_placeholder_text      = isset( $the_core_header_settings['enable_search']['yes']['search_type'][$the_core_search_type]['search_advanced_styling']['placeholder_text'] ) ? $the_core_header_settings['enable_search']['yes']['search_type'][$the_core_search_type]['search_advanced_styling']['placeholder_text'] : '';
?>
<header class="fw-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
	<?php if ( $the_core_enable_header_top_bar == 'yes' ) {
		the_core_top_bar( array('top_bar_text' => $the_core_top_bar_text, 'enable_header_socials' => $the_core_enable_header_socials, 'enable_search' => $the_core_enable_search, 'search_type' => $the_core_search_type, 'placeholder_text' => $the_core_placeholder_text, 'search_position' => $the_core_search_position) );
	} ?>
	<div class="fw-header-main">
    <div class="downloadSection">
      <a href="https://opuspharmserve.com/downloads/" title="Click Here to Access Our Free Downloadable Resources" class="header-download-link"><i class="fa fa-download" style="color: white;" aria-hidden="true"></i> <span class="downloadable-intro-text">Click Here to Access Our Free</span> Downloadable Resources </a>
    </div>
    <div class="fw-container">
        <?php the_core_logo(); ?>
        <?php
        if ( $the_core_enable_search == 'yes' && $the_core_search_position == 'menu_bar' ) {
          the_core_header_search( array('search_type' => $the_core_search_type, 'placeholder_text' => $the_core_placeholder_text) );
        }
        ?>
        <div class="fw-nav-wrap" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" role="navigation">
          <?php fw_theme_nav_menu( 'primary' ); ?>
        </div>
    </div>
  </div>

  <!-- <div class="fw-wrap-search-form fw-form-search-full" role="search">
    <?php
    //if ( function_exists( 'woocommerce_product_search' ) ) {
     // echo woocommerce_product_search();
    //}
    ?>
  </div> -->

  <div class="fw-wrap-search-form fw-form-search-full" role="search">
    <br />
    <h4>Search</h4>

    <script>
      (function() {
        var cx = '005162218788344297515:xywffmvygko';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    </script>
    <gcse:search enablehistory="false"></gcse:search>

	</div>

		 <?php
		//f ($the_core_enable_search == 'yes' && $the_core_search_type == 'fw-mini-search') {
		//	the_core_header_mini_search($the_core_placeholder_text);
		//} ?>
</header>

