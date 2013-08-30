/**
 * Created with JetBrains PhpStorm.
 * User: vargus
 * Date: 03.03.13
 * Time: 17:42
 * To change this template use File | Settings | File Templates.
 */

jQuery(document).ready(function () {
    $('.accordion .head').click(function () {
        $(this).next().toggle('slow');
        return false;
    }).next().hide();
});

$("#cert_1").fancybox({
    helpers: {
        title: {
            type: 'float'
        }
    }
});