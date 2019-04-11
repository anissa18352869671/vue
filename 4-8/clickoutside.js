Vue.directive('clickoutside', {
    bind: function (el, binding, vnode) {
        console.log(binding)

        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }

        function keyUp(e) {
            if (e.keyCode == 27 && binding.modifiers.esc) {
                if (binding.expression) {
                    binding.value(e);
                }
            }
        }
        el._vueClickOutside_ = documentHandler;
        el._vueKeyUp_ = keyUp;

        document.addEventListener('click', documentHandler);

        document.addEventListener('keyup', keyUp);
    },
    // update(el, binding) {
    //     el[clickoutside].methodName = binding.expression;
    //     el[clickoutside].bindingFn = binding.value;
    // },
    unbind: function (el, binding) {
        document.removeEventListener('click', el._vueClickOutside_);
        delete el._vueClickOutside_;

        document.removeEventListener('keyup', el._vueKeyUp_);
        delete el._vueKeyUp_;
    }
})