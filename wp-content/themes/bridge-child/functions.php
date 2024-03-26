<?php
// Add custom Theme Functions here
// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'bridge-default-style','bridge-default-style','bridge-qode-font_awesome','bridge-qode-font_elegant','bridge-qode-linea_icons','bridge-qode-dripicons','bridge-qode-kiko','bridge-qode-font_awesome_5','bridge-stylesheet','bridge-print','bridge-style-dynamic','bridge-responsive','bridge-style-dynamic-responsive' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 100 );

// END ENQUEUE PARENT ACTION
global $theme_dir;
$theme_dir = get_stylesheet_directory();
include_once($theme_dir . '/includes/shortcodes.php');