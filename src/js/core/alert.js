import Class from '../mixin/class';
import Togglable from '../mixin/togglable';
import {assign} from 'uikit-util';

/**
 * @structure {
 *  props: [
 *      'animation', 'duration', 'selClose'
 *  ],
 *  emit: ['hidden', 'hide', 'beforehide']
 * }
 * @customize {
 *  props: {
 *      animation: {
 *          description: 'Fade out or use the [Animation component](animation.md).'
 *      }
 *  }
 * }
 *
 */
export default {

    attrs: true,

    mixins: [Class, Togglable],

    args: 'animation',

    props: {

        /**
         * The close trigger element.
         * @type {CSS-selector}
         */
        selClose: String,
        close: String
    },

    data: {
        animation: [true],
        selClose: '.uk-alert-close',
        duration: 150,
        hideProps: assign({opacity: 0}, Togglable.data.hideProps)
    },

    events: [

        {

            name: 'click',

            delegate() {
                return this.selClose;
            },

            handler(e) {
                e.preventDefault();
                this.close();
            }

        }

    ],

    methods: {

        close() {
            this.toggleElement(this.$el).then(() => this.$destroy(true));
        }

    }

};
