// SLeasy3-cache
;(function (SLeasy, $, store) {
    //set/read Cache
    SLeasy.cache = function () {
        console.log('arguments:' + arguments);
        var vars = arguments.length,
            args = arguments;

        //不同参数策略
        var cacheFuncs = [
            function () {
                var value = $.extend(($.cookie() || {}), store.getAll());
                return value;
            },
            function () {
                console.log('get cache~' + args[0]);
                var value = $.cookie(args[0]) || store.get(args[0]);
                return value;
            },
            function () {
                console.log('set cache~' + args[0] + ':' + args[1]);
                $.cookie(args[0], args[1]);
                store.set(args[0], args[1]);
            },
            function () {
                $.cookie((args[0], args[1]), $.extend({expires: 7}, args[2]));
                store.set(args[0], args[1]);
            }
        ];

        //策略执行
        return cacheFuncs[vars]();
    }

    //delete Cache
    SLeasy.noCache = function () {
        var vars = arguments.length;

        //不同参数策略
        var noCacheFuncs = [
            function () {
                store.clear();
                $.each($.cookie(), function (index, value) {
                    $.removeCookie(index);
                })
            },
            function () {
                var value = $.removeCookie(args[0]);
                store.remove(args[0]);
                return value;
            }
        ];

        //策略执行OO
        return noCacheFuncs[vars]();

    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    store
);