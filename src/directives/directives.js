import Vue from 'vue';

// custom tooltip v-directive
Vue.directive('tooltip', {
  inserted(el, binding, vnode){
    let thisWidth = vnode.elm.scrollWidth,
        parentWidth = vnode.elm.parentElement.offsetWidth,
        fullLengthText = vnode.elm.innerText,
        showTooltip = false,
        once = true,
        lineHeight = 29;

    // slice text for one-lined string
    if(thisWidth > parentWidth){
      let lengthWasCut = false;
      while(vnode.elm.scrollWidth > vnode.elm.parentElement.offsetWidth){
        vnode.elm.innerText = vnode.elm.innerText.slice(0, -1);
        lengthWasCut = true;
      }
      lengthWasCut === true ? vnode.elm.innerText = vnode.elm.innerText.slice(0, -3) + "..." : false;
        showTooltip = true;
      }
      // slice text for 5+ lined string
      if(vnode.elm.clientHeight > lineHeight*4){
        let lengthWasCut = false;
        while(vnode.elm.clientHeight > lineHeight*4){
          vnode.elm.innerText = vnode.elm.innerText.slice(0, -1);
          lengthWasCut = true;
        }
        lengthWasCut === true ? vnode.elm.innerText = vnode.elm.innerText.slice(0, -3) + "..." : false;
        showTooltip = true;
      }


    // enable tooltip by mouseover
    let enableTooltip = () => {
      if(once && showTooltip){
        let tooltipWrap = document.createElement("div");
        tooltipWrap.className="tooltipWrap";
        tooltipWrap.style.position="relative";
        el.parentNode.insertBefore(tooltipWrap, el);

        tooltipWrap.appendChild(el);

        let tooltip = document.createElement("div");
        tooltip.innerHTML = fullLengthText;
        tooltip.className = "tooltip";
        el.prepend(tooltip);
      }
        once = false;
      };

      let disableTooltip = () => {
        if(showTooltip){
          once = true;
          document.querySelector('.tooltip').remove();
          el.parentNode.replaceWith(...el.parentNode.childNodes);
        }
      };

    el.addEventListener('mouseover', enableTooltip);
    el.addEventListener('mouseleave', disableTooltip);
  }
});