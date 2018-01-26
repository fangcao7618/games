/* eslint-disable */
/**
 * 在UC浏览器安卓版下试验，不出所料的滑到最右边启用了UC上一页、下一页手势。解决BUG
 */
export const preventUCDefault = (function () {
    var ua = window.navigator.userAgent,
        startX = 0,
        diffY = 0,
        bindPreventTouch = function () {
            $(document.body).on('touchmove.prevUC', function (e) {
                e.preventDefault();
            });
        },
        isAndroid = (function () {
            return (!!ua.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/) && !!ua.match(/Android[\s\/]([\d\.]+)/));
        })();

    return {
        init: function (ul) {
            if (isAndroid) {
                var scrollWidth = ul[0].scrollWidth;

                ul.on('touchstart.prevUC', function (e) {
                    startX = e.touches[0].pageX;
                });

                ul.on('touchmove.prevUC', function (e) {
                    diffY = e.touches[0].pageX - startX;
                    if ($(this).scrollLeft() == 0 && diffY > 0) {
                        //到最左
                        bindPreventTouch();
                    } else if ((scrollWidth - $(this).scrollLeft() - ul.width()) === 0 && diffY < 0) {
                        //到最右
                        bindPreventTouch();
                    }
                });

                ul.on('touchend.prevUC', function (e) {
                    $(document.body).off('touchmove.prevUC');
                });
            }
        }
    }
})();

export default {};
// preventUCDefault.init(scope.find('.slide-image ul'));
