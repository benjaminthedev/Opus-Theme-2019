jQuery(document).ready(function ($) {

    $('.quantity').on('click', '.plus', function (e) {
        $input = $(this).prev('input.qty');
        var val = parseInt($input.val());
        $input.val(val + 1).change();
    });

    $('.quantity').on('click', '.minus',
        function (e) {
            $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });


    //RCREEK - the following function breaks the unyson accordion functionality
    // on every page of the website

    //Custom Function for scrolling on the home page:
    // $(function () {
    //     $('a[href*=#]:not([href=#])').click(function () {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     });
    // });

    $('.firstClickable').click(function () {
        $('.firstDownloadableBox').toggleClass("showDownloadLink");
        //console.log("Is working?");
    });

    //Wrapping sections:

    $(".homeSectionOne").wrapAll("<div id='section1' />");
    // $( ".homeSectionTwo" ).wrapAll( "<div id='section2' />");
    $(".homeSectionThree").wrapAll("<div id='section3' />");

    //New Section
    $(".newSectionFourTwo").wrapAll("<div id='section2' />");

    //Button on the shop page for buy now:

    //$('a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart').html('Buy Now');
    $('a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart').html('Add To Cart');


    // $('a.button.product_type_grouped').html('Find Out More');
    $('a.button.product_type_grouped').html('Select Delivery Option');

    // FAQ boxes product pages

    $('h4.faqTab01').click(function () {
        $('.faqTab01box').toggleClass("showFAQBox");
    });

    $('h4.faqTab02').click(function () {
        $('.faqTab02box').toggleClass("showFAQBox");
    });

    $('h4.faqTab03').click(function () {
        $('.faqTab03box').toggleClass("showFAQBox");
    });

    $('h4.faqTab04').click(function () {
        $('.faqTab04box').toggleClass("showFAQBox");
    });

    $('h4.faqTab05').click(function () {
        $('.faqTab05box').toggleClass("showFAQBox");
    });

    $('h4.faqTab06').click(function () {
        $('.faqTab06box').toggleClass("showFAQBox");
    });

    $('h4.faqTab07').click(function () {
        $('.faqTab07box').toggleClass("showFAQBox");
    });

    $('h4.faqTab08').click(function () {
        $('.faqTab08box').toggleClass("showFAQBox");
    });

    //New Section
    $(".pricing").wrapAll("<div class='section-three-information' />");

    // Single product page info
    $('li.courseInfo').click(function () {
        $(this).addClass("activedClass");
        $('li.accreditation, li.pricings').removeClass("activedClass");

        $('.section-one-information').toggleClass("showINFOBox");
        $('.section-two-information').removeClass("showINFOBox");
        console.log("course info");
    });


    $('li.accreditation').click(function () {
        $(this).addClass("activedClass");
        $('li.courseInfo, li.pricings').removeClass("activedClass");

        $('.section-one-information').removeClass("showINFOBox");
        $('.section-two-information').toggleClass("showINFOBox");
        console.log("Accre box");
    });

    $('li.pricings').click(function () {
        $(this).addClass("activedClass");
        $('li.accreditation, li.courseInfo').removeClass("activedClass");
        $('.section-three-information').toggleClass("showINFOBox");
        $('.section-one-information, .section-two-information').removeClass("showINFOBox");
        console.log("Pricing Box");

        $(".additionalResourcesInfos").toggleClass("GoAway");
        $(".newborder").toggleClass("GoAway");
    });

    $(".pricing").append("<div class='additionalResourcesInfos2'>Remember to check out our <a href='https://opuspharmserve.com/downloads/' hidefocus='true' style='outline: none;'>free downloadable resources</a>.</div> <div class='newborder2'></div>");

    $("a.enquiresBtn").each(function (i) {
        $("a.enquiresBtn").addClass("item" + (i + 1));
    });

    //Single products layout

    $('.postid-7981 form.cart').insertAfter('.niceTitle');

    //enquiries button to click to enquiries page
    //This is from individual product pages / the single product page

    $(".postid-21451 .add-to-cart-container, .postid-10418 .add-to-cart-container, .postid-10369 .add-to-cart-container, .postid-7954 .add-to-cart-container, .postid-7936 .add-to-cart-container, .postid-7929 .add-to-cart-container, .postid-7931 .add-to-cart-container, .postid-7940 .add-to-cart-container, .postid-7938 .add-to-cart-container, .postid-7933 .add-to-cart-container, .postid-7911 .add-to-cart-container, .postid-7927 .add-to-cart-container, .postid-7944 .add-to-cart-container, .postid-7948 .add-to-cart-container, .postid-9516 .add-to-cart-container, .postid-7942 .add-to-cart-container, .postid-7963 .add-to-cart-container, .postid-7979 .add-to-cart-container").after('<br /> <a href="https://opuspharmserve.com/enquiries/" class="newButtonClicked">Enquire Now</a>');
    $(".postid-11834 .add-to-cart-container").after('<br /> <a href="https://opuspharmserve.com/enquiries/" class="newButtonClicked">Enquire Now</a>');

    //This is from the archive product page

    $(" a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='10418'], a.button.product_type_grouped[data-product_id='10369'], a.button.product_type_grouped[data-product_id='7909'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7979'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='10369'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7956'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7909'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7963'], a.button.product_type_grouped[data-product_id='7965'], a.button.product_type_grouped[data-product_id='7967'], a.button.product_type_grouped[data-product_id='7969'], a.button.product_type_grouped[data-product_id='7971'], a.button.product_type_grouped[data-product_id='7975'], a.button.product_type_grouped[data-product_id='7973'], a.button.product_type_grouped[data-product_id='7979'], a.button.product_type_grouped[data-product_id='7975'], a.button[data-product_id='7954'], a.button[data-product_id='7936'], a.button[data-product_id='7929'], a.button[data-product_id='7931'], a.button[data-product_id='7940'], a.button[data-product_id='7938'], a.button[data-product_id='7933'], a.button[data-product_id='7911'], a.button[data-product_id='7927'], a.button[data-product_id='7944'], a.button[data-product_id='7948'], a.button[data-product_id='9516'], a.button[data-product_id='7942'], a.button[data-product_id='7971'], a.button[data-product_id='7973'], a.button[data-product_id='7975'], a.button[data-product_id='7967'], a.button[data-product_id='7969']").hover(function () {
        window.location.href = 'https://opuspharmserve.com/enquiries/';
    });

    //Sod
    $("a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='21451'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='10418'], a.button.product_type_grouped[data-product_id='10369'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='10369'], a.button.product_type_grouped[data-product_id='7909'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7979'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7956'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7909'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7963'], a.button.product_type_grouped[data-product_id='7965'], a.button.product_type_grouped[data-product_id='7967'], a.button.product_type_grouped[data-product_id='7969'], a.button.product_type_grouped[data-product_id='7971'], a.button.product_type_grouped[data-product_id='7975'], a.button.product_type_grouped[data-product_id='7973'], a.button.product_type_grouped[data-product_id='7979'], a.button.product_type_grouped[data-product_id='7975'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7954'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7936'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7929'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7931'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7940'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7938'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7933'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7911'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7927'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7944'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7948'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='9516'], a.button.product_type_simple.add_to_cart_button.ajax_add_to_cart[data-product_id='7942']").html('Enquire Now');


    /*
    This is for just the medicine magagemnt improvement workshop page as it is not working.
    */

    $("tr.shipping th").append(" and handling");
});
