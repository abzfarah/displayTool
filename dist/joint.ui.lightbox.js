/*! Rappid v1.7.0 - HTML 5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2016-01-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


joint.ui.Lightbox = joint.ui.Dialog.extend({

    className: joint.ui.Dialog.prototype.className + ' lightbox',

    options: _.merge({}, joint.ui.Dialog.prototype.options, {
        closeButton: true,
        modal: true,
        closeAnimation: {
            delay: 2000,
            duration: 200,
            easing: 'swing',
            properties: {
                opacity: 0
            }
        },
        top: 100,// The distance from the image to the top of the screen.
        windowArea: .8,// The maxium percentage of the window that is covered by lightbox.
        openAnimation: false
    }),

    init: function() {

        _.bindAll(this, 'startCloseAnimation', 'onWindowResize');

        joint.ui.Dialog.prototype.init.apply(this, arguments);

        if (this.options.image) {
            var $image = $('<img/>', { src: this.options.image });
            this.options.content = $image;
        }

        $(window).on('resize', this.onWindowResize);

        this.on('close:animation:complete', this.remove, this);
    },

    open: function() {

        joint.ui.Dialog.prototype.open.apply(this, arguments);
        //$body.append($titlebar);
        //$body.append($btnClose);
        this.positionAndScale();
        this.startOpenAnimation();
        return this;
    },

    onWindowResize: function() {

        this.positionAndScale();
    },

    positionAndScale: function() {

        // We do our best to show both the image and the titlebar text in the window
        // without any scrolling.
        var $fg = this.$('.fg');
        var $img = this.$('.body > img');
        var ratio = this.options.windowArea;
        var width = window.innerWidth * ratio;

        // Offset the whole lightbox by the `options.top` coordinate.
        this.$el.css('margin-top', this.options.top);

        // Get the height of the titlbar taking into account its final width.
        var $titlebar = this.$('.titlebar');
        $titlebar.css('width', width);
        var titlebarHeight = $titlebar.height();

        // Calculate the height of the whole lightbox foreground, without the titlebar.
        var height = window.innerHeight * ratio - titlebarHeight - this.options.top;
        $titlebar.css('width', 'auto');

        // Set maximum area for the image and let the image scale via CSS (max-width/max-height).
        $fg.css({ width: width, height: height });

        // Now set the foreground bbox according to the image size. so that
        // controls (titlebar and close button) can be positioned in CSS relative
        // to the foreground.
        var imageWidth = $img.width();
        var imageHeight = $img.height();
        $fg.css({ width: imageWidth, height: imageHeight });
    },

    close: function() {

        if (this.options.closeAnimation) {
            this.startCloseAnimation();
        } else {
            joint.ui.Dialog.prototype.close.apply(this, arguments);
        }

        return this;
    },

    onRemove: function() {

        joint.ui.Dialog.prototype.onRemove.apply(this, arguments);
        $(window).off('resize', this.onWindowResize);
    },

    startCloseAnimation: function() {

        this.$el.animate(this.options.closeAnimation.properties, _.extend({

            complete: _.bind(function() {

                this.trigger('close:animation:complete');

            }, this)

        }, this.options.closeAnimation));
    },

    startOpenAnimation: function() {

        this.$el.animate(_.extend({}, this.options.openAnimation.properties, { height: this._foregroundHeight }), _.extend({

            complete: _.bind(function() {

                this.trigger('open:animation:complete');

            }, this)

        }, this.options.openAnimation));
    }
});
